import * as React from 'react';
import Header from './Header';
import Todo from './todo';

const Main = ():React.node => {
    return(
        <div>
        <Header/>
        <Todo/>
        </div>
    )
};

export default Main;