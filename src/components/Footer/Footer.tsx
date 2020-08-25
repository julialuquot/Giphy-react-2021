import React from 'react';
import css from './Footer.module.scss';
import Banner from '@components/Footer/components/Banner';

const Footer = () => {
    return (
        <footer className={css.footer}>
            <Banner />
        </footer>
    );
};

export default Footer;
