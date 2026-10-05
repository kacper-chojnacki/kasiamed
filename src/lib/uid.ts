let counter = 0;

/** Deterministic unique id for inline SVG defs (clip paths, gradients) rendered more than once per page. */
export const uid = (prefix: string) => `${prefix}${++counter}`;
