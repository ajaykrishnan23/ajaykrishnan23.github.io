// Falling-leaf motion for the little flowers: each one swings left and right as it drops,
// tilting into the swing, with its own random rhythm, plus a shared breeze that comes and goes.

export type Flake = {
  baseX: number; // centre of the swing, drifts with the breeze
  y: number;
  fall: number; // px (or svg units) per second
  amp: number; // how wide it swings
  freq: number; // how fast it swings (rad/s)
  phase: number;
  wobble: number; // slow random change in swing speed, so no two swings match
  tilt: number; // degrees of lean at the edge of a swing
  spin: number; // slow extra rotation (deg/s)
  rot: number;
  scale: number;
};

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export function spawn(width: number, height: number, scatter: boolean, unit = 1): Flake {
  return {
    baseX: rand(0, width),
    y: scatter ? rand(-20 * unit, height) : rand(-60 * unit, -20 * unit),
    fall: rand(14, 34) * unit,
    amp: rand(14, 46) * unit,
    freq: rand(0.55, 1.35),
    phase: rand(0, Math.PI * 2),
    wobble: rand(0, 1000),
    tilt: rand(18, 38),
    spin: rand(-14, 14),
    rot: rand(0, 360),
    scale: rand(0.7, 1.25),
  };
}

/** Shared breeze: a few slow sine waves layered so it never quite repeats. */
export function breeze(t: number): number {
  return Math.sin(t * 0.11) * 0.55 + Math.sin(t * 0.29 + 1.7) * 0.3 + Math.sin(t * 0.73 + 4.1) * 0.15;
}

/** Advance one flake; returns its position and rotation for this frame. */
export function step(f: Flake, t: number, dt: number, wind: number, unit = 1) {
  // swing speed slowly wanders per flake
  const freq = f.freq * (1 + 0.25 * Math.sin(t * 0.4 + f.wobble));
  f.phase += freq * dt;
  const s = Math.sin(f.phase);
  const c = Math.cos(f.phase);
  // a leaf drops fastest through the bottom of its swing, slowest at the edges
  f.y += f.fall * (0.55 + 0.45 * Math.abs(c)) * dt;
  f.baseX += wind * 12 * unit * dt;
  f.rot += f.spin * dt;
  return {
    x: f.baseX + f.amp * s,
    y: f.y,
    rot: f.rot + f.tilt * c,
  };
}
