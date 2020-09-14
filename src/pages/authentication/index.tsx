import React from 'react';
import css from './index.scss';
import Layout from '@components/Layout/Layout';
import LeftSide from '@components/Authentication/left/LeftSide';
import RightSide from '@components/Authentication/right/RightSide';
import LoginConfirmation from '@components/Authentication/left/LoginConfirmation';
import LoginConfirmationRight from '@components/Authentication/right/LoginConfirmation';

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
