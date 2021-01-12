import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../example/App';

const TEST_ID = {
  CURRENT_PAGE: 'currentPage',
  TOTAL_PAGE: 'totalPage',
  PAGE_ITEMS: 'pageItems',
  HAS_PREV: 'hasPrev',
  HAS_NEXT: 'hasNext',
  FIRST_BOUNDARY: 'firstBoundary',
  LAST_BOUNDARY: 'lastBoundary',
  IS_PREV_TRUNCATED: 'isPrevTruncated',
  IS_NEXT_TRUNCATED: 'isNextTruncated',
} as const;

describe('Paginated', () => {
  describe('Render Props', () => {
    describe('Current page: 1 / Total page: 1', () => {
      beforeEach(() => {
        render(<App currentPage={1} totalPage={1} />);
      });

      it('renders current page as 1', async () => {
        const currentPage = await screen.findByTestId(TEST_ID.CURRENT_PAGE);
        expect(currentPage).toHaveTextContent('1');
      });
      it('renders total page as 1', async () => {
        const totalPage = await screen.findByTestId(TEST_ID.TOTAL_PAGE);
        expect(totalPage).toHaveTextContent('1');
      });
      it('renders 1 page item', async () => {
        const pageItems = await screen.findAllByTestId(TEST_ID.PAGE_ITEMS);
        expect(pageItems).toHaveLength(1);
      });
      it('does not render prev link', () => {
        const prev = screen.queryByTestId(TEST_ID.HAS_PREV);
        expect(prev).toBeNull();
      });
      it('does not render next link', () => {
        const next = screen.queryByTestId(TEST_ID.HAS_NEXT);
        expect(next).toBeNull();
      });
      it('does not render first boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.FIRST_BOUNDARY);
        expect(boundary.length).toBe(0);
      });
      it('does not render last boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.LAST_BOUNDARY);
        expect(boundary.length).toBe(0);
      });
      it('does not render prev truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_PREV_TRUNCATED);
        expect(truncated).toBeNull();
      });
      it('does not render next truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_NEXT_TRUNCATED);
        expect(truncated).toBeNull();
      });
    });

    describe('Current page: 1 / Total page: 10', () => {
      beforeEach(() => {
        render(<App currentPage={1} totalPage={10} />);
      });

      it('renders current page as 1', async () => {
        const currentPage = await screen.findByTestId(TEST_ID.CURRENT_PAGE);
        expect(currentPage).toHaveTextContent('1');
      });
      it('renders total page as 10', async () => {
        const totalPage = await screen.findByTestId(TEST_ID.TOTAL_PAGE);
        expect(totalPage).toHaveTextContent('10');
      });
      it('renders 5 page items', async () => {
        const pageItems = await screen.findAllByTestId(TEST_ID.PAGE_ITEMS);
        expect(pageItems).toHaveLength(5);
      });
      it('does not render prev link', () => {
        const prev = screen.queryByTestId(TEST_ID.HAS_PREV);
        expect(prev).toBeNull();
      });
      it('render next link', () => {
        const next = screen.queryByTestId(TEST_ID.HAS_NEXT);
        expect(next).toBeInTheDocument();
      });
      it('does not render first boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.FIRST_BOUNDARY);
        expect(boundary.length).toBe(0);
      });
      it('render last boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.LAST_BOUNDARY);
        expect(boundary.length).toBe(2);
      });
      it('does not render prev truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_PREV_TRUNCATED);
        expect(truncated).toBeNull();
      });
      it('render next truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_NEXT_TRUNCATED);
        expect(truncated).toBeInTheDocument();
      });
    });

    describe('Current page: 5 / Total page: 10', () => {
      beforeEach(() => {
        render(<App currentPage={5} totalPage={10} />);
      });

      it('renders current page as 5', async () => {
        const currentPage = await screen.findByTestId(TEST_ID.CURRENT_PAGE);
        expect(currentPage).toHaveTextContent('5');
      });
      it('renders total page as 10', async () => {
        const totalPage = await screen.findByTestId(TEST_ID.TOTAL_PAGE);
        expect(totalPage).toHaveTextContent('10');
      });
      it('renders 5 page items', async () => {
        const pageItems = await screen.findAllByTestId(TEST_ID.PAGE_ITEMS);
        expect(pageItems).toHaveLength(5);
      });
      it('render prev link', () => {
        const prev = screen.queryByTestId(TEST_ID.HAS_PREV);
        expect(prev).toBeInTheDocument();
      });
      it('render next link', () => {
        const next = screen.queryByTestId(TEST_ID.HAS_NEXT);
        expect(next).toBeInTheDocument();
      });
      it('render first boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.FIRST_BOUNDARY);
        expect(boundary.length).toBe(2);
      });
      it('render last boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.LAST_BOUNDARY);
        expect(boundary.length).toBe(2);
      });
      it('does not render prev truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_PREV_TRUNCATED);
        expect(truncated).toBeNull();
      });
      it('render next truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_NEXT_TRUNCATED);
        expect(truncated).toBeInTheDocument();
      });
    });

    describe('Current page: 10 / Total page: 10', () => {
      beforeEach(() => {
        render(<App currentPage={10} totalPage={10} />);
      });

      it('renders current page as 10', async () => {
        const currentPage = await screen.findByTestId(TEST_ID.CURRENT_PAGE);
        expect(currentPage).toHaveTextContent('10');
      });
      it('renders total page as 10', async () => {
        const totalPage = await screen.findByTestId(TEST_ID.TOTAL_PAGE);
        expect(totalPage).toHaveTextContent('10');
      });
      it('renders 5 page items', async () => {
        const pageItems = await screen.findAllByTestId(TEST_ID.PAGE_ITEMS);
        expect(pageItems).toHaveLength(5);
      });
      it('render prev link', () => {
        const prev = screen.queryByTestId(TEST_ID.HAS_PREV);
        expect(prev).toBeInTheDocument();
      });
      it('does not render next link', () => {
        const next = screen.queryByTestId(TEST_ID.HAS_NEXT);
        expect(next).toBeNull();
      });
      it('render first boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.FIRST_BOUNDARY);
        expect(boundary.length).toBe(2);
      });
      it('does not render last boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.LAST_BOUNDARY);
        expect(boundary.length).toBe(0);
      });
      it('render prev truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_PREV_TRUNCATED);
        expect(truncated).toBeInTheDocument();
      });
      it('does not render next truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_NEXT_TRUNCATED);
        expect(truncated).toBeNull();
      });
    });

    describe('Current page: 1 / Total page: 10 / Sibling size: 3', () => {
      beforeEach(() => {
        render(<App currentPage={3} totalPage={10} siblingSize={3} />);
      });

      it('renders current page as 3', async () => {
        const currentPage = await screen.findByTestId(TEST_ID.CURRENT_PAGE);
        expect(currentPage).toHaveTextContent('3');
      });
      it('renders total page as 10', async () => {
        const totalPage = await screen.findByTestId(TEST_ID.TOTAL_PAGE);
        expect(totalPage).toHaveTextContent('10');
      });
      it('renders 7 page items', async () => {
        const pageItems = await screen.findAllByTestId(TEST_ID.PAGE_ITEMS);
        expect(pageItems).toHaveLength(7);
      });
      it('render prev link', () => {
        const prev = screen.queryByTestId(TEST_ID.HAS_PREV);
        expect(prev).toBeInTheDocument();
      });
      it('render next link', () => {
        const next = screen.queryByTestId(TEST_ID.HAS_NEXT);
        expect(next).toBeInTheDocument();
      });
      it('does not render first boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.FIRST_BOUNDARY);
        expect(boundary.length).toBe(0);
      });
      it('render last boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.LAST_BOUNDARY);
        expect(boundary.length).toBe(2);
      });
      it('does not render prev truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_PREV_TRUNCATED);
        expect(truncated).toBeNull();
      });
      it('render next truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_NEXT_TRUNCATED);
        expect(truncated).toBeInTheDocument();
      });
    });

    describe('Current page: 1 / Total page: 10 / Boundary size: 3', () => {
      beforeEach(() => {
        render(<App currentPage={3} totalPage={10} boundarySize={3} />);
      });

      it('renders current page as 3', async () => {
        const currentPage = await screen.findByTestId(TEST_ID.CURRENT_PAGE);
        expect(currentPage).toHaveTextContent('3');
      });
      it('renders total page as 10', async () => {
        const totalPage = await screen.findByTestId(TEST_ID.TOTAL_PAGE);
        expect(totalPage).toHaveTextContent('10');
      });
      it('renders 5 page items', async () => {
        const pageItems = await screen.findAllByTestId(TEST_ID.PAGE_ITEMS);
        expect(pageItems).toHaveLength(5);
      });
      it('render prev link', () => {
        const prev = screen.queryByTestId(TEST_ID.HAS_PREV);
        expect(prev).toBeInTheDocument();
      });
      it('render next link', () => {
        const next = screen.queryByTestId(TEST_ID.HAS_NEXT);
        expect(next).toBeInTheDocument();
      });
      it('does not render first boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.FIRST_BOUNDARY);
        expect(boundary.length).toBe(0);
      });
      it('render last boundary', () => {
        const boundary = screen.queryAllByTestId(TEST_ID.LAST_BOUNDARY);
        expect(boundary.length).toBe(3);
      });
      it('does not render prev truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_PREV_TRUNCATED);
        expect(truncated).toBeNull();
      });
      it('render next truncated', () => {
        const truncated = screen.queryByTestId(TEST_ID.IS_NEXT_TRUNCATED);
        expect(truncated).toBeInTheDocument();
      });
    });
  });
});
