import React from 'react';
import Link from 'next/link';
import css from './Navbar.module.scss';
import Button from '@components/common/Button/Button';
import SelectNavBar from './SelectNavBar/SelectNavBar';
import { withTranslation } from '@i18n';
import { getRoute, ROUTE } from '@services/http/Route';

const namespacesRequired = ['navbar'];

type NavBarProps = {
    t: (string) => string;
};

const Navbar = ({ t }: NavBarProps) => {
    return (
        <nav className={css.navbar}>
            <div className={css.navbar__left}>
                <img className={css.navbar__left__logo} src="/front-static/icons/logo-lpc.svg" alt={'logo lpc'} />
            </div>

            <div className={css.navbar__right}>
                <SelectNavBar />

                <div className={css.navbar__right__btn}>
                    <Button variant={'primary'} height={'38px'} width={'120px'} margin={'0 0 0 16px'}>
                        {t('navbar:create-pot')}
                    </Button>

                    <Link href={getRoute(ROUTE.LPC.SIGN_IN, null)}>
                        <a>
                            <Button variant={'secondary'} height={'38px'} width={'120px'} margin={'0 0 0 16px'}>
                                {t('navbar:sign-in')}
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default withTranslation(namespacesRequired)(Navbar);
