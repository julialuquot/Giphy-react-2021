import React from 'react';
import Navbar from '@components/dashboard/Navbar/Navbar';
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
                    {!hideNavbar && <Navbar />}
                    <main>{children}</main>
                </div>
            </InformationsProvider>
        </AuthProvider>
    );
};

export default Layout;