import React from 'react';
import css from './HomePage.module.scss';
import Landing1 from '@components/lpc/Home/01-Landing/Landing';

import Layout from '@components/lpc/layout/Layout';

const HomePage = () => {
    return (
        <Layout>
            <div className={css.homePageWrapper}>
                <Landing1 />
            </div>
        </Layout>
    );
};

export default HomePage;
