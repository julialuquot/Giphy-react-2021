import React from 'react';
import css from './preview-page.module.scss';
import Layout from '@components/dashboard/Layout/Layout';
import NavPreview from '@components/dashboard/NavPreview/NavPreview';
import AuthService from '@services/domain/AuthService';
import { getRoute, ROUTE } from '@services/http/Route';

type PreviewPageProps = {
    partnerUniq: string;
};

const PreviewPage = ({ partnerUniq }: PreviewPageProps) => {
    return (
        <Layout hideNavbar>
            <NavPreview partnerUniq={partnerUniq} />
            <div className={css.previewWrapper}>I am a preview</div>
        </Layout>
    );
};

PreviewPage.getInitialProps = async (ctx) => {
    const principal = await AuthService.getUser(ctx);
    const partnerUniq = await ctx.query.reference;

    // @ts-ignore
    if (!principal) {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.SIGN_IN, null),
        });
        ctx.res.end();
        return;
    }

    return { principal, partnerUniq };
};
export default PreviewPage;
