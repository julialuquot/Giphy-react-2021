import React from 'react';
import Layout from '@components/lpc/Layout/Layout';
import Terms from '@components/lpc/Terms/Terms';
import css from './terms-page.module.scss';

const TermsPage: React.FC = () => {
    return (
        <Layout>
            <div className={css.terms}>
                <Terms />
            </div>
        </Layout>
    );
};
export default TermsPage;
