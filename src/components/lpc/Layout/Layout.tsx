import React from 'react';
import NavDesktop from '@components/lpc/Navbar/NavDesktop/NavDesktop';
import NavMobile from '@components/lpc/Navbar/NavMobile/NavMobile';
import Footer from '@components/lpc/Footer/Footer';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { M_DEVICE } from '@components/lpc/Constants';
import css from './Layout.scss';

type LayoutProps = {
    hideNavbar?: boolean;
    hideFooter?: boolean;
    children: React.ReactNode;
};

const Layout = ({ hideNavbar, hideFooter, children }: LayoutProps) => {
    const { width } = useWindowSize();

    return (
        <div className={css.layout}>
            {!hideNavbar && width >= M_DEVICE && <NavDesktop />}
            {!hideNavbar && width < M_DEVICE && <NavMobile />}
            <main>{children}</main>
            {!hideFooter && <Footer />}
        </div>
    );
};

export default Layout;
