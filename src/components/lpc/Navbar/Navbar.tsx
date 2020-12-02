import React from 'react';
import Link from 'next/link';
import css from './Navbar.module.scss';
import Button from '@components/common/Button/Button';
import SelectNavBar from './SelectNavBar/SelectNavBar';
import { withTranslation } from '@i18n';

const namespacesRequired = ['navbar'];

type NavBarProps = {
    t: (string) => string;
};

const Navbar = ({ t }: NavBarProps) => {
    return (
        <nav className={css.navbar}>
            <div className={css.navbar__left}>
                <img className={css.navbar__logo} src="/front-static/icons/logo-lpc.svg" alt={'logo lpc'} />

                <SelectNavBar />
            </div>
            <div className={css.navbar__right}>
                <Link href="/connexion">
                    <a>
                        <Button variant={'secondary'} size={'medium'}>
                            {t('navbar:sign-in')}
                        </Button>
                    </a>
                </Link>

                <Button variant={'primary'} size={'medium'}>
                    {t('navbar:create-pot')}
                </Button>
            </div>
        </nav>
    );
};

export default withTranslation(namespacesRequired)(Navbar);
