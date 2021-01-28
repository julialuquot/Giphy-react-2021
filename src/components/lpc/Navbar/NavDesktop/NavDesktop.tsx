import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@i18n';
import Button from '@components/common/Button/Button';
import Text from '@components/common/Text/Text';
import SelectSecondary from '@components/common/Dropdowns/SelectSecondary/SelectSecondary';
import { getRoute, ROUTE } from '@services/http/Route';
import { useRouter } from 'next/router';
import css from './NavDesktop.module.scss';

const NavDesktop = () => {
    const { t } = useTranslation('lpc-navbar');
    const router = useRouter();

    const [redirectionLink, setRedirectionLink] = useState(null);

    const labelArray = [
        {
            tag: t('lpc-navbar:select.free'),
            title: t('lpc-navbar:select.partners'),
        },
        {
            tag: t('lpc-navbar:select.free'),
            title: t('lpc-navbar:select.gift-card'),
        },
        {
            tag: t('lpc-navbar:select.commission'),
            title: t('lpc-navbar:select.bank-transfer'),
        },
    ];

    const label = labelArray.map((label) => {
        return (
            <div key={label.title} className={css.customLabel}>
                <Text variant="caption_00" color={'brand-primary'}>
                    {label.tag}
                </Text>
                <Text variant="button" color={'txt-primary'}>
                    {label.title}{' '}
                </Text>
            </div>
        );
    });

    const options = [
        { value: t('lpc-navbar:select.partners'), label: label[0] },
        { value: t('lpc-navbar:select.gift-card'), label: label[1] },
        { value: t('lpc-navbar:select.bank-transfer'), label: label[2] },
    ];

    useEffect(() => {
        if (redirectionLink === 'Nos partenaires') {
            router.push(getRoute(ROUTE.LPC.PURCHASING_TYPE.PARTNERS_NETWORKS, null)).then();
        }
        if (redirectionLink === 'Carte cadeau') {
            router.push(getRoute(ROUTE.LPC.PURCHASING_TYPE.GIFT_CARD, null)).then();
        }
        if (redirectionLink === 'Virement bancaire') {
            router.push(getRoute(ROUTE.LPC.PURCHASING_TYPE.BANK_TRANSFER, null)).then();
        }
    }, [redirectionLink, router]);

    return (
        <nav className={css.navbar}>
            <div className={css.navbar__left}>
                <Link href={getRoute(ROUTE.LPC.HOME, null)}>
                    <a>
                        <img
                            className={css.navbar__left__logo}
                            src="/front-static/icons/logo/lpc-with-txt.svg"
                            alt={'Le pot commun'}
                        />
                    </a>
                </Link>
            </div>

            <div className={css.navbar__right}>
                <SelectSecondary
                    options={options}
                    placeholder={t('lpc-navbar:select.placeholder')}
                    customMenu={css.select__menu}
                    customControl={css.select__control}
                    customWrapper={css.select__wrapper}
                    onSelect={(link) => setRedirectionLink(link)}
                />

                <Button customClass={css.navbar__right__btn} variant={'primary'}>
                    {t('lpc-navbar:create-pot')}
                </Button>

                <Link href={getRoute(ROUTE.LPC.SIGN_IN, null)}>
                    <a>
                        <Button customClass={css.navbar__right__btn} variant={'secondary'}>
                            {t('lpc-navbar:sign-in')}
                        </Button>
                    </a>
                </Link>
            </div>
        </nav>
    );
};

export default NavDesktop;
