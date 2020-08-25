import React from 'react';
import css from './Footer.module.scss';
import Banner from '@components/Footer/components/Banner/Banner';
import Grid from '@components/Footer/components/Categories/Categories';
import Hint from '@components/Footer/components/Hint/Hint';
import { withTranslation } from '@i18n';

const namespacesRequired = ['footer'];

const Footer = () => {
    return (
        <footer className={css.footer}>
            <Banner />
            <Grid />
            <Hint />
        </footer>
    );
};

export default withTranslation(namespacesRequired)(Footer);
