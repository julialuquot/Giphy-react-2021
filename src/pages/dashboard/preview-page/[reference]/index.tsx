import React from 'react';
import css from './preview-page.module.scss';
import Layout from '@components/dashboard/Layout/Layout';
import NavPreview from '@components/dashboard/NavPreview/NavPreview';
import AuthService from '@services/domain/AuthService';
import { getRoute, ROUTE } from '@services/http/Route';

type PreviewPageProps = {
    partnerUniq: string;
    userRole: string;
};

const PreviewPage = ({ partnerUniq, userRole }: PreviewPageProps) => {
    return (
        <Layout hideNavbar>
            <NavPreview userRole={userRole} partnerUniq={partnerUniq} />
            <div className={css.previewWrapper}>I am a preview</div>
        </Layout>
    );
};

PreviewPage.getInitialProps = async (ctx) => {
    const principal = await AuthService.getUser(ctx);
    const userRole = (await principal) && AuthService.getUserRole(principal);
    const partnerUniq = await ctx.query.reference;
    const isAdminPath = await ctx.asPath.includes('admin');

    if (isAdminPath && userRole !== 'ADMIN') {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.SIGN_IN, null),
        });
        ctx.res.end();
        return;
    }

    // @ts-ignore
    if (!principal) {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.SIGN_IN, null),
        });
        ctx.res.end();
        return;
    }

    return { principal, partnerUniq, userRole };
};
export default PreviewPage;
