import React from 'react';
import css from './home-page.module.scss';
import { withTranslation } from '@i18n';

const namespacesRequired = ['home-page'];

const Index = () => {
    return <div className={css.wrapper}>HOME PAGE</div>;
};

export default withTranslation(namespacesRequired)(Index);
