import * as React from 'react';
import { Paginated } from '../src/index';
import { styled } from './stiches.config';

const Grid = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
});

export const App: React.FC<{
  currentPage: number;
  totalPage: number;
  siblingsSize?: number;
  boundarySize?: number;
}> = ({ currentPage, totalPage, siblingsSize, boundarySize }) => (
  <Paginated
    currentPage={currentPage}
    totalPage={totalPage}
    siblingsSize={siblingsSize}
    boundarySize={boundarySize}
  >
    {props => (
      <div>
        <div>
          currentpage: <div data-testid="currentPage">{props.currentPage}</div>
          totalpage: <div data-testid="totalPage">{props.totalPage}</div>
        </div>
        <Grid>
          {props.hasPrev() && (
            <a href="#" data-testid="hasPrev">
              prev
            </a>
          )}
          {props.getFirstBoundary().map(boundary => {
            return (
              <span key={boundary} data-testid="firstBoundary">
                {boundary}
              </span>
            );
          })}
          {props.isPrevTruncated && (
            <div data-testid="isPrevTruncated">...</div>
          )}
          <div>
            {props.pages.map(page => {
              return page === props.currentPage ? (
                <span
                  key={page}
                  style={{
                    fontWeight: 'bold',
                    fontSize: '120%',
                  }}
                  data-testid="pageItems"
                >
                  {page}
                </span>
              ) : (
                <a href="#" key={page} data-testid="pageItems">
                  {page}
                </a>
              );
            })}
          </div>
          {props.isNextTruncated && (
            <div data-testid="isNextTruncated">...</div>
          )}
          {props.getLastBoundary().map(boundary => {
            return (
              <span key={boundary} data-testid="lastBoundary">
                {boundary}
              </span>
            );
          })}
          {props.hasNext() && (
            <a href="#" data-testid="hasNext">
              next
            </a>
          )}
        </Grid>
      </div>
    )}
  </Paginated>
);
