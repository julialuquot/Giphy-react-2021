import React from 'react';
import css from './index.scss';
import test from './utils';
// import Button from '@components/button';

const Home = () => {
    test();
    return (
        <div className={css.home}>
            home page
            {/* <Button></Button> */}
        </div>
    );
};

export default Home;
