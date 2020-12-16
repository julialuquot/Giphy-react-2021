import React from 'react';
import Header from '@components/dashboard/Header/Header';
import css from './Layout.module.scss';
import AuthProvider from '@components/dashboard/context/auth/AuthProvider';
import InformationsProvider from '@components/dashboard/context/informations/InformationsProvider';
import PartnersProvider from '@components/dashboard/context/partners/PartnersProvider';

type LayoutProps = {
    hideNavbar?: boolean;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ hideNavbar, children }: LayoutProps) => {
    return (
        <AuthProvider>
            <InformationsProvider>
                <PartnersProvider>
                    <div className={css.layout}>
                        {!hideNavbar && <Header />}
                        <main>{children}</main>
                    </div>
                </PartnersProvider>
            </InformationsProvider>
        </AuthProvider>
    );
};

export default Layout;
