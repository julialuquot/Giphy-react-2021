import React from 'react';
import css from './Footer.module.scss';
import { withTranslation } from '@i18n';
import Banner from './components/Banner/Banner';
import Grid from './components/Categories/Categories';
import Hint from './components/Hint/Hint';
import Divider from './components/Divider/Divider';

const namespacesRequired = ['footer'];

const Footer = () => {
    return (
        <footer className={css.footer}>
            <Banner />
            <Grid />
            <Divider />
            <Hint />
        </footer>
    );
};

export default withTranslation(namespacesRequired)(Footer);
