import React from 'react';
import css from './index.scss';
import { resetIdCounter } from 'react-tabs';
import { withTranslation } from '@i18n';
import Landing1 from '@components/Home/Landing1/Landing1';
import Landing2 from '@components/Home/Landing2/Landing2';
import Landing3 from '@components/Home/Landing3/Landing3';
import Landing4 from '@components/Home/Landing4/Landing4';

const namespacesRequired = ['home-page'];

const Home = () => {
    return (
        <div className={css.home}>
            <Landing1 />
            <Landing2 />
            <Landing3 />
            <Landing4 />
        </div>
    );
};

Home.getInitialProps = async () => {
    const resetIdTabs = await resetIdCounter();
    return {
        resetIdTabs,
    };
};

export default withTranslation(namespacesRequired)(Home);
