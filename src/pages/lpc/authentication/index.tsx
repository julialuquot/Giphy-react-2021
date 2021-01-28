import React, { useState, useEffect } from 'react';
import css from './index.scss';
import Layout from '@components/lpc/Layout/Layout';
import LeftSide from '@components/lpc/Authentication/left/LeftSide';
import RightSide from '@components/lpc/Authentication/right/RightSide';
import LoginLeft from '@components/lpc/Authentication/left/Login';
import LoginRight from '@components/lpc/Authentication/right/Login';
import LostPassword from '@components/lpc/Authentication/left/LostPassword';
import EmailSentConfirmation from '@components/lpc/Authentication/left/EmailSentConfirmation';
import UpdatePassword from '@components/lpc/Authentication/left/UpdatePassword';
import LoginConfirmation from '@components/lpc/Authentication/left/LoginConfirmation';
import AuthenticationPageContext from '@components/lpc/Authentication/AuthenticationPageContext';

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
