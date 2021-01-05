import React from 'react';
import MainHeading from '@components/common/Heading/MainHeading/MainHeading';
import { useTranslation } from '@i18n';
import css from './Header.module.scss';

const Header = () => {
    const { t } = useTranslation('lpc-bank-transfer');

    const wallet = [
        { comm: t('lpc-bank-transfer:wallet.comm-0'), desc: t('lpc-bank-transfer:wallet.desc-0') },
        { comm: t('lpc-bank-transfer:wallet.comm-1'), desc: t('lpc-bank-transfer:wallet.desc-1') },
        { comm: t('lpc-bank-transfer:wallet.comm-2'), desc: t('lpc-bank-transfer:wallet.desc-2') },
    ];

    return (
        <>
            <div className={css.header}>
                <MainHeading
                    title={t('lpc-bank-transfer:title')}
                    subtitle={t('lpc-bank-transfer:subtitle')}
                    paragraph={t('lpc-bank-transfer:description')}
                />

                <div className={css.header__wallet}>
                    <img src="/front-static/images/card/wallet.png" alt="wallet" />
                    <div className={css.header__wallet__circle} />

                    <div className={css.header__wallet__banner}>
                        {wallet.map((item) => {
                            return (
                                <div key={item.comm} className={css.header__wallet__banner__bloc}>
                                    <h3>{item.comm}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
