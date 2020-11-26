import React from 'react';
import css from './sign-in-page.module.scss';
import Layout from '@components/dashboard/Layout/Layout';
import SignIn from '@components/dashboard/Authentication/SignIn/SignIn';

const Authentication = () => {
    return (
        <Layout>
            <div className={css.pageWrapper}>
                <SignIn />
            </div>
        </Layout>
    );
};

export default Authentication;
