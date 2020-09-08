import React from 'react';
import Layout from '@components/layout/Layout';
import Terms from '@components/Terms/Terms';
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
