import React from 'react';
import css from './preview-page.module.scss';
import Layout from '@components/dashboard/Layout/Layout';
import NavPreview from '@components/dashboard/Admin/NavPreview/NavPreview';

const PreviewPage = () => {
    return (
        <Layout hideNavbar>
            <NavPreview />
            <div className={css.previewWrapper}>I am a preview</div>
        </Layout>
    );
};

export default PreviewPage;
