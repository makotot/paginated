export type UsePaginatedProps = {
  totalPage: number;
  currentPage: number;
  siblingsSize?: number;
  boundarySize?: number;
};

export type UsePaginated = (
  args0: UsePaginatedProps
) => {
  pages: number[];
  hasPrev: () => boolean;
  hasNext: () => boolean;
  getFirstBoundary: () => number[];
  getLastBoundary: () => number[];
  isPrevTruncated: boolean;
  isNextTruncated: boolean;
  totalPage: number;
  currentPage: number;
};
