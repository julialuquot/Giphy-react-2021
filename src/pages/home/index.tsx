import React from 'react';
import css from './index.scss';

import { withTranslation } from '@i18n';

const namespacesRequired = ['common'];

interface HomeProps {
    t: (string) => string;
}

const Home = ({ t }: HomeProps) => {
    return (
        <div className={css.home}>
            <h1>{t('common:test')}</h1>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Home);
