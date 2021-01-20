// @flow
import * as React from 'react';

import Header from './Header/header';
import Todo from './todo';

const Main = (): React.Node => (
  <div>
    <Header />
    <Todo />
  </div>
);

export default Main;
