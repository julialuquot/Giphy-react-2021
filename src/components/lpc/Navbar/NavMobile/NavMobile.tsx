import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import { getRoute, ROUTE } from '@services/http/Route';
import CustomCollapsible from '@components/common/Collapsible/CustomCollapsible/CustomCollapsible';
import css from './NavMobile.module.scss';

const NavMobile = () => {
    const { t } = useTranslation('lpc-navbar');
    const [isOpen, setIsOpen] = useState(false);

    const onMenuClick = () => setIsOpen(!isOpen);

    const navLink = [
        {
            title: t('lpc-navbar:select.placeholder'),
            rows: [
                {
                    row: t('lpc-navbar:select.partners'),
                    link: ROUTE.LPC.PURCHASING_TYPE.PARTNERS_NETWORKS,
                    icon: '/front-static/icons/navigation/chevron-right.svg',
                },
                {
                    row: t('lpc-navbar:select.gift-card'),
                    link: ROUTE.LPC.PURCHASING_TYPE.GIFT_CARD,
                    icon: '/front-static/icons/navigation/chevron-right.svg',
                },
                {
                    row: t('lpc-navbar:select.bank-transfer'),
                    link: ROUTE.LPC.PURCHASING_TYPE.BANK_TRANSFER,
                    icon: '/front-static/icons/navigation/chevron-right.svg',
                },
            ],
        },
        {
            title: t('lpc-navbar:account.placeholder'),
            rows: [
                {
                    row: t('lpc-navbar:account.dashboard'),
                    link: '#',
                    icon: '/front-static/icons/navigation/chevron-right.svg',
                },
                {
                    row: t('lpc-navbar:account.settings'),
                    link: '#',
                    icon: '/front-static/icons/navigation/chevron-right.svg',
                },
                {
                    row: t('lpc-navbar:account.logout'),
                    link: '#',
                    icon: '/front-static/icons/navigation/chevron-right.svg',
                },
            ],
        },
    ];

    return (
        <div>
            <nav className={css.navbar}>
                <section>
                    <Link href={getRoute(ROUTE.LPC.HOME, null)}>
                        <a>
                            <img
                                className={css.navbar__left__logo}
                                src="/front-static/icons/logo/lpc-with-txt.svg"
                                alt={'Le pot commun'}
                            />
                        </a>
                    </Link>
                </section>

                <section onClick={() => onMenuClick()} className={css.navbar__menu}>
                    <div className={isOpen ? css.navbar__menu__open : css.navbar__menu__close} />
                </section>
            </nav>

            <section className={`${css.sidebar} ${isOpen ? css.sidebar__open : css.navbar__sidebar__close}`}>
                {navLink.map((category) => (
                    <CustomCollapsible
                        key={category.title}
                        trigger={category.title}
                        content={category.rows.map((row) => row)}
                        customCollapsible={css.collapsible}
                        customTrigger={css.collapsible__trigger}
                        customTriggerOpened={css.collapsible__trigger__opened}
                        customText={css.collapsible__text}
                        customTriggerOuter={css.collapsible__outer}
                        customTriggerInner={css.collapsible__inner}
                    />
                ))}

                <div className={css.sidebar__btn}>
                    <Link href={getRoute(ROUTE.LPC.SIGN_IN, null)}>
                        <a>
                            <Button customClass={css.sidebar__btn__cta} variant={'primary'}>
                                {t('lpc-navbar:create-pot')}
                            </Button>
                        </a>
                    </Link>
                    <Link href={getRoute(ROUTE.LPC.SIGN_IN, null)}>
                        <a>
                            <Button customClass={css.sidebar__btn__cta} variant={'secondary'}>
                                {t('lpc-navbar:sign-in')}
                            </Button>
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default NavMobile;
