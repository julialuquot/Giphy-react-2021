import React from 'react';
import css from './index.scss';
import { resetIdCounter } from 'react-tabs';
import { withTranslation } from '@i18n';
import Landing1 from '@components/Home/Landing1/Landing1';
import Landing2 from '@components/Home/Landing2/Landing2';

const namespacesRequired = ['common'];

const Home = () => {
    return (
        <div className={css.home}>
            <Landing1 />
            <Landing2 />
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
