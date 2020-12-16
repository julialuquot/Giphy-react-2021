import React from 'react';
import css from './HomePage.module.scss';
import Landing1 from '@components/lpc/Home/01-Landing/Landing';
import Landing2 from '@components/lpc/Home/Landing2/Landing2';
import Landing3 from '@components/lpc/Home/Landing3/Landing3';
import Landing4 from '@components/lpc/Home/Landing4/Landing4';
import Landing5 from '@components/lpc/Home/Landing5/Landing5';
import Layout from '@components/lpc/layout/Layout';

const HomePage = () => {
    return (
        <Layout>
            <div className={css.homePageWrapper}>
                <Landing1 />
                <Landing2 />
                <Landing3 />
                <Landing4 />
                <Landing5 />
            </div>
        </Layout>
    );
};

export default HomePage;
