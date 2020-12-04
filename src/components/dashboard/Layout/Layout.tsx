import React from 'react';
import Header from '@components/dashboard/Navbar/Header';
import css from './Layout.module.scss';
import AuthProvider from '@components/dashboard/context/auth/AuthProvider';
import InformationsProvider from '@components/dashboard/context/informations/InformationsProvider';

type LayoutProps = {
    hideNavbar?: boolean;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ hideNavbar, children }: LayoutProps) => {
    return (
        <AuthProvider>
            <InformationsProvider>
                <div className={css.layout}>
                    {!hideNavbar && <Header />}
                    <main>{children}</main>
                </div>
            </InformationsProvider>
        </AuthProvider>
    );
};

export default Layout;
