import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import css from './Layout.scss';

type LayoutProps = {
    hideNavbar?: boolean;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ hideNavbar, children }: LayoutProps) => {
    return (
        <div className={css.layout}>
            {!hideNavbar && <Navbar />}
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
