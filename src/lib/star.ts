/**
 * Geometry of the KASIA MED star mark (Star of Life with the rod of Asclepius),
 * drawn on a 100×100 grid. Shared by the inline logo components and the favicon.
 */

/** Three bars rotated by 60° form the six-armed star. */
export const starBars = [0, 60, -60].map((deg) => ({
  x: 36,
  y: 3,
  width: 28,
  height: 94,
  transform: deg ? `rotate(${deg} 50 50)` : undefined,
}));

/** ECG trace splitting the star into the blue (upper) and red (lower) halves. */
export const ecgLine = 'M0 55 H16 L20 50 L24 61 L28 39 L32 64 L35.5 55 H64.5 L68 46 L72 66 L76 41 L80 59 L84 55 H100';

const ecgReversed = 'H84 L80 59 L76 41 L72 66 L68 46 L64.5 55 H35.5 L32 64 L28 39 L24 61 L20 50 L16 55 H0';

export const upperClip = `M0 0 H100 V55 ${ecgReversed} Z`;
export const lowerClip = `M0 100 H100 V55 ${ecgReversed} Z`;

export const rod = { x: 48.3, y: 13, width: 3.4, height: 76, rx: 1.7 };
export const rodKnob = { cx: 50, cy: 12, r: 3.2 };

export const snake =
  'M56.5 20.5 C52 18 45.5 20 45.5 25 C45.5 30.5 55.5 29.5 55.5 35.5 C55.5 41.5 44.5 40 44.5 46.5 C44.5 52.5 55.5 51.5 55.5 57.5 C55.5 63.5 44.5 62 44.5 68 C44.5 73 51 73 52.5 77';
export const snakeHead = { cx: 58.2, cy: 20.6, rx: 3.4, ry: 2.4 };
