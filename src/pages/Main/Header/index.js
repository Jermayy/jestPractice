/* eslint-disable arrow-spacing */
import * as React from 'react';

// type Props = {
//     styles: {},
// };

const Header = () :React.node =>{
  const handleOnClick = (e) => {
    e.preventDefault();
    console.log('header');
  };

  return (
    <div style={{ border: '10px solid black' }}>
      <h1> Header </h1>
      <button onClick={handleOnClick} type="submit"> log </button>
    </div>
  );
};

export default Header;
