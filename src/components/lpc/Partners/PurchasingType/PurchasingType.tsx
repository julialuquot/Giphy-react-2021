import React from 'react';
import css from './PurchasingType.module.scss';
import { useTranslation } from '@i18n';
import OnLine from '@components/lpc/Partners/PurchasingType/OnLine/OnLine';
import Voucher from '@components/lpc/Partners/PurchasingType/Voucher/Voucher';

type PurchasingTypeProps = {
    partnerType: any;
    partnerLink: string;
    offersValues?: {
        ordinalVPGC: number;
        amountVPGC: number;
    }[];
};

const PurchasingType = ({ partnerType, partnerLink, offersValues }: PurchasingTypeProps) => {
    const { t } = useTranslation('lpc-partner-details');

    return (
        <div className={css.purchase}>
            {partnerType === 'API_LPC' && (
                <OnLine
                    title={t('lpc-partner-details:type.online.title')}
                    subtitle={t('lpc-partner-details:type.online.subtitle')}
                    paragraph={t('lpc-partner-details:type.online.paragraph')}
                    terms={t('lpc-partner-details:type.online.terms')}
                    cta={t('lpc-partner-details:type.online.cta')}
                    partnerLink={partnerLink}
                />
            )}{' '}
            {partnerType === 'VOUCHER' && (
                <Voucher
                    title={t('lpc-partner-details:type.voucher.title')}
                    subtitle={t('lpc-partner-details:type.voucher.subtitle')}
                    paragraph={t('lpc-partner-details:type.voucher.paragraph')}
                    terms={t('lpc-partner-details:type.voucher.terms')}
                    cta={t('lpc-partner-details:type.voucher.cta')}
                    offersValues={offersValues}
                />
            )}
        </div>
    );
};

export default PurchasingType;
