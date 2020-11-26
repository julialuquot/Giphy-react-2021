import React from 'react';
import Navbar from '@components/dashboard/Navbar/Navbar';
import css from './Layout.module.scss';

type LayoutProps = {
    hideNavbar?: boolean;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ hideNavbar, children }: LayoutProps) => {
    return (
        <div className={css.layout}>
            {!hideNavbar && <Navbar />}
            <main>{children}</main>
        </div>
    );
};

export default Layout;
