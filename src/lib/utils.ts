export const chunkify = (array: any[], size: number): any[] =>
  Array(Math.ceil(array.length / size))
    .fill(undefined)
    .map((_, index) => index * size)
    .map(begin => array.slice(begin, begin + size));
