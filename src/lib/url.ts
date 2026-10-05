/** Prefix an internal path with the configured base (e.g. `/kasiamed/`), so links work on GitHub Pages and on a custom domain. */
export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
};
