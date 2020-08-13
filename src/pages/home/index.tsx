import React from 'react';
import css from './index.scss';
import { withTranslation } from '@i18n';
import Landing from '@components/Landing/Landing';

const namespacesRequired = ['common'];

const Home = () => {
    return (
        <div className={css.home}>
            <Landing />
        </div>
    );
};
export default withTranslation(namespacesRequired)(Home);
