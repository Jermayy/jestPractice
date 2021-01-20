// @flow
import * as React from 'react';

import Header from './Header/header';
import Todo from './todo';
import List from './List/List';

import Mock from '../../utils/mock';

const Main = (): React.Node => (
  <div>
    <Header />
    <Todo />
    <List data={Mock} />
  </div>
);

export default Main;
