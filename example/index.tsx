import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <App currentPage={3} totalPage={10} boundarySize={3} />,
  document.getElementById('root')
);
