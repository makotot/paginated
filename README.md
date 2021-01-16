# Paginated

> Headless component & custom hook for pagination.

## Install

```sh
npm i @makotot/paginated
```

## Example

- [With Chakra UI](https://codesandbox.io/s/chakra-ui-gtwix)

## Usage

### Render Props

```tsx
import { Paginated } from '@makotot/paginated'

...

return (
  <Paginated currentPage={1} totalPage={10} siblingsSize={2} boundarySize={2}>
    {({ pages, currentPage, hasPrev, hasNext, getFirstBoundary, getLastBoundary, isPrevTruncated, isNextTruncated }) => (
      <div>
        {hasPrev() && <a href="#">prev</a>}
        {getFirstBoundary().map(boundary => <a href="#" key={boundary}>{boundary}</a>)}
        {isPrevTruncated && <span>...</span>}
        {pages.map(page => {
          return page === currentPage ? (
            <span key={page}>{page}</span>
          ) : (
            <a href="#" key={page}>{page}</a>
          );
        })}
        {isNextTruncated && <span>...</span>}
        {getLastBoundary().map(boundary => <a href="#" key={boundary}>{boundary}</a>)}
        {hasNext() && <a href="#">next</a>}
      </div>
    )}
  </Paginated>
)
```

### Hooks

```tsx
import { usePaginated } from '@makotot/paginated'

...

const { pages, currentPage, hasPrev, hasNext, getFirstBoundary, getLastBoundary, isPrevTruncated, isNextTruncated } = usePaginated({ currentPage: 1, totalPage: 10, siblingSize: 2, boundarySize: 2 });

return (
  <div>
    {hasPrev() && <a href="#">prev</a>}
    {getFirstBoundary().map(boundary => <a href="#" key={boundary}>{boundary}</a>)}
    {isPrevTruncated && <span>...</span>}
    {pages.map(page => {
      return page === currentPage ? (
        <span key={page}>{page}</span>
      ) : (
        <a href="#" key={page}>{page}</a>
      );
    })}
    {isNextTruncated && <span>...</span>}
    {getLastBoundary().map(boundary => <a href="#" key={boundary}>{boundary}</a>)}
    {hasNext() && <a href="#">next</a>}
  </div>
)
```

## Options

### `currentPage`

Type: `number`

The value of current page. Required.

### `totalPage`

Type: `number`

The value of total page. Required.

### `siblingSize`

Type: `number`

The items size of one side of the middle of pagination.

### `boundarySize`

Type: `number`

The items size of one side of the edge of pagination.

## Returns (Hooks) | Props (Render Props)

### `pages`

Type: `number[]`

The page items of the middle of pagination.

### `currentPage`

Type: `number`

The value of current page.

### `hasPrev`

Type: `boolean`

Returns `true` if previous page of the current page is exist.

### `hasNext`

Type: `boolean`

Returns `true` if next page of the current page is exist.

### `getFirstBoundary`

Type: `() => number[]`

Returns page items of first boundary.

### `getLastBoundary`

Type: `() => number[]`

Returns page items of last boundary.

### `isPrevTruncated`

Type: `boolean`

Returns `true` if pages before the current page is ellipsized.

### `isNextTruncated`

Type: `boolean`

Returns `true` if pages after the current page is ellipsized.

## Authors

- [makotot](https://github.com/makotot)
