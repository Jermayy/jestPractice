// @flow

import * as React from 'react';
import ListItem from './ListItem';

type Props = {
  data: Array<{
    id: number,
    name: string,
    location: string,
  }>,
};

const List = ({ data }: Props): React.Node => (
  <div>
    {data.map((item) => (
      <ListItem id={item.id} name={item.name} location={item.location} />
    ))}
  </div>
);

export default List;
