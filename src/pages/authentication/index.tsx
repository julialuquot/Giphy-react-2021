import React from 'react';
import css from './index.scss';
import Layout from '@components/Layout/Layout';
import LeftSide from '@components/Authentication/Left/LeftSide';
import RightSide from '@components/Authentication/Right/RightSide';
import LoginConfirmation from '@components/Authentication/Left/LoginConfirmation';
import LoginConfirmationRight from '@components/Authentication/Right/LoginConfirmation';

const Authentication: React.FC = () => {
    return (
        <Layout hideNavbar>
            <div className={css.pageWrapper}>
                <div className={css.leftSide}>
                    <LeftSide>
                        <LoginConfirmation phoneNumber="10" />
                        {/* <LoginLeft /> */}
                    </LeftSide>
                </div>
                <div className={css.rightSide}>
                    <RightSide>
                        {/* <LoginRight /> */}
                        <LoginConfirmationRight />
                    </RightSide>
                </div>
            </div>
        </Layout>
    );
};

export default Authentication;
