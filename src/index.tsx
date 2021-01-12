import { usePaginated } from './usePaginated';
import { UsePaginatedProps } from './types';

export type PaginatedProps = {
  children: (arg0: ReturnType<typeof usePaginated>) => JSX.Element;
} & UsePaginatedProps;

export { usePaginated };

export const Paginated = ({
  children,
  totalPage,
  currentPage,
  siblingsSize,
  boundarySize,
}: PaginatedProps) => {
  const paginated = usePaginated({
    totalPage,
    currentPage,
    siblingsSize,
    boundarySize,
  });

  return children(paginated);
};
