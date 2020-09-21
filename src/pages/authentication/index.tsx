import React, { useState, useEffect } from 'react';
import css from './index.scss';
import Layout from '@components/layout/Layout';
import LeftSide from '@components/Authentication/left/LeftSide';
import RightSide from '@components/Authentication/right/RightSide';
import LoginLeft from '@components/Authentication/left/Login';
import LoginRight from '@components/Authentication/right/Login';
import LostPassword from '@components/Authentication/left/LostPassword';
import EmailSentConfirmation from '@components/Authentication/left/EmailSentConfirmation';
import UpdatePassword from '@components/Authentication/left/UpdatePassword';
import LoginConfirmation from '@components/Authentication/left/LoginConfirmation';
import AuthenticationPageContext from '@components/Authentication/AuthenticationPageContext';

const Authentication: React.FC = () => {
    const [uniqUP, setUniqUP] = useState(null);

    useEffect(() => {
        setUniqUP(new URLSearchParams(window.location.search).get('uniqUP'));
    });
    return (
        <AuthenticationPageContext.Provider>
            <AuthenticationPageContext.Consumer>
                {({ pages, page, setPage }) => {
                    if (uniqUP) {
                        setPage(pages.newPassword);
                    }
                    return (
                        <Layout hideNavbar>
                            <div className={css.pageWrapper}>
                                <div className={css.leftSide}>
                                    <LeftSide>
                                        {page === pages.login && <LoginLeft />}
                                        {page === pages.loginConfirmation && <LoginConfirmation phoneNumber="10" />}
                                        {page === pages.lostPassword && <LostPassword />}
                                        {page === pages.emailSentConfirmation && <EmailSentConfirmation />}
                                        {page === pages.newPassword && <UpdatePassword uniqUP={uniqUP} />}
                                    </LeftSide>
                                </div>
                                <div className={css.rightSide}>
                                    <RightSide>
                                        <LoginRight />
                                        {/* <LoginConfirmationRight /> */}
                                    </RightSide>
                                </div>
                            </div>
                        </Layout>
                    );
                }}
            </AuthenticationPageContext.Consumer>
        </AuthenticationPageContext.Provider>
    );
};

export default Authentication;
