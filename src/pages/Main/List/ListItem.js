// @flow

import * as React from 'react';

type Props = {
  id: number,
  name: string,
  location: string,
};

const ListItem = ({ id, name, location }: Props): React.Node => (
  <li>
    <p>
      ID No.
      {id}
    </p>
    <p>
      Name:
      {name}
    </p>
    <p>
      Location:
      {location}
    </p>
  </li>
);

export default ListItem;
