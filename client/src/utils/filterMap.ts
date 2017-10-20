type DO_FILTER = 'FILTER_MAP/DO_FILTER';
const doFilter: DO_FILTER = 'FILTER_MAP/DO_FILTER';

export const filterMap = <T, R>(
  arr: T[],
  cb: (val: T, doFilter: DO_FILTER, index: number, array: T[]) => R | DO_FILTER,
): R[] => {
  return arr.reduce((prev, curr, index): R[] => {
    const transformed = cb(curr, doFilter, index, arr);
    return transformed === doFilter ? prev : [...prev, transformed];
  }, []);
};
