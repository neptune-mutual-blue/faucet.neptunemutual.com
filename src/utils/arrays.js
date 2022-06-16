export const chunk = (size, arr = []) => {
  return arr.reduce(
    (segments, _, index) =>
      index % size === 0
        ? [...segments, arr.slice(index, index + size)]
        : segments,
    []
  );
};
