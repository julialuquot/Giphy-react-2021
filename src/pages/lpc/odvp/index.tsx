import React from 'react';
import css from './index.module.scss';
import { withTranslation } from '@i18n';
import Odvp from '@components/lpc/Odvp/Odvp';

const namespacesRequired = ['home-page'];

const OdvpPage = () => {
    return (
        <div className={css.odvp}>
            <Odvp />
        </div>
    );
};

export default withTranslation(namespacesRequired)(OdvpPage);
