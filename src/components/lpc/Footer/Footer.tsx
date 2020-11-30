import React from 'react';
import css from './Footer.module.scss';
import { withTranslation } from '@i18n';
import Banner from '@components/lpc/Footer/components/Banner/Banner';
import Grid from '@components/lpc/Footer/components/Categories/Categories';
import Hint from '@components/lpc/Footer/components/Hint/Hint';
import Divider from '@components/lpc/Footer/components/Divider/Divider';

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
