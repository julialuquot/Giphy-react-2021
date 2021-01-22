import React from 'react';
import Navbar from '@components/lpc/Navbar/Navbar';
import Footer from '@components/lpc/Footer/Footer';
import css from './Layout.scss';

type LayoutProps = {
    hideNavbar?: boolean;
    hideFooter?: boolean;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ hideNavbar, hideFooter, children }: LayoutProps) => {
    return (
        <div className={css.layout}>
            {!hideNavbar && <Navbar />}
            <main>{children}</main>
            {!hideFooter && <Footer />}
        </div>
    );
};

export default Layout;
