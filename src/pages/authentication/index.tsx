import React from 'react';
import css from './index.scss';
import Layout from '@components/layout/Layout';
import LeftSide from '@components/Authentication/Login/left/LeftSide';
import RightSide from '@components/Authentication/Login/right/RightSide';
import LoginLeft from '@components/Authentication/Login/left/Login';
import LoginRight from '@components/Authentication/Login/right/login';

const Authentication: React.FC = () => {
    return (
        <Layout hideNavbar>
            <div className={css.pageWrapper}>
                <div className={css.leftSide}>
                    <LeftSide>
                        <LoginLeft />
                    </LeftSide>
                </div>
                <div className={css.rightSide}>
                    <RightSide>
                        <LoginRight />
                    </RightSide>
                </div>
            </div>
        </Layout>
    );
};

export default Authentication;
