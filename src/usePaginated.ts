import { useState, useEffect, useCallback } from 'react';
import { UsePaginated } from './types';

const SIBLING_SIZE = 2;
const BOUNDARY_SIZE = 2;

export const usePaginated: UsePaginated = ({
  totalPage,
  currentPage,
  siblingsSize = SIBLING_SIZE,
  boundarySize = BOUNDARY_SIZE,
}) => {
  const totalPageItems = [...Array(totalPage)].fill(1).map((_, i) => i + 1);
  const [pages, updatePages] = useState<number[]>([]);
  const displayPageItemsSize = siblingsSize * 2 + 1;
  const isReachedToFirst = useCallback(() => currentPage <= siblingsSize, [
    currentPage,
    siblingsSize,
  ]);
  const isReachedToLast = useCallback(
    () => currentPage + siblingsSize >= totalPage,
    [currentPage, siblingsSize, totalPage]
  );

  const setPages = useCallback(() => {
    if (isReachedToFirst()) {
      return updatePages(totalPageItems.slice(0, displayPageItemsSize));
    }
    if (isReachedToLast()) {
      return updatePages(totalPageItems.slice(-displayPageItemsSize));
    }

    return updatePages(
      totalPageItems.slice(
        currentPage - siblingsSize - 1,
        currentPage + siblingsSize
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isReachedToFirst,
    isReachedToLast,
    currentPage,
    siblingsSize,
    displayPageItemsSize,
  ]);

  const hasPrev = useCallback(() => currentPage > 1, [currentPage]);
  const hasNext = useCallback(() => totalPage > currentPage, [
    totalPage,
    currentPage,
  ]);
  const prevAllPages = totalPageItems.slice(0, pages[0] - 1);
  const nextAllPages = totalPageItems.slice(
    pages[pages.length - 1],
    totalPageItems[totalPageItems.length]
  );

  const getFirstBoundary = useCallback(() => {
    if (isReachedToFirst()) {
      return [];
    }
    if (prevAllPages.length < 1) {
      return [];
    }
    const boundary = totalPageItems
      .slice(0, boundarySize)
      .filter(p => !pages.includes(p));

    return boundary;
  }, [
    boundarySize,
    isReachedToFirst,
    pages,
    prevAllPages.length,
    totalPageItems,
  ]);

  const getLastBoundary = useCallback(() => {
    if (isReachedToLast()) {
      return [];
    }
    if (nextAllPages.length < 1) {
      return [];
    }
    const boundary = totalPageItems
      .slice(totalPageItems.length - boundarySize, totalPageItems.length)
      .filter(p => !pages.includes(p));
    return boundary;
  }, [
    boundarySize,
    isReachedToLast,
    nextAllPages.length,
    pages,
    totalPageItems,
  ]);

  const isPrevTruncated =
    prevAllPages.filter(
      p => !getFirstBoundary().includes(p) && !pages.includes(p)
    ).length > 0;
  const isNextTruncated =
    nextAllPages.filter(
      p => !getLastBoundary().includes(p) && !pages.includes(p)
    ).length > 0;

  useEffect(() => {
    setPages();
  }, [totalPage, currentPage, setPages]);

  return {
    pages,
    hasPrev,
    hasNext,
    getFirstBoundary,
    getLastBoundary,
    isPrevTruncated,
    isNextTruncated,
    totalPage,
    currentPage,
  };
};
