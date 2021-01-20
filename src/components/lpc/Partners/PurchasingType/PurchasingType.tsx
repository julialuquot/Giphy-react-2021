import React from 'react';
import { useTranslation } from '@i18n';
import OnLine from '@components/lpc/Partners/PurchasingType/OnLine/OnLine';
import Voucher from '@components/lpc/Partners/PurchasingType/Voucher/Voucher';
import GiftCard from '@components/lpc/Partners/PurchasingType/GiftCard/GiftCard';
import css from './PurchasingType.module.scss';

type PurchasingTypeProps = {
    partnerType: any;
    partnerLink: string;
    offersValues?: {
        ordinalVPGC: number;
        amountVPGC: number;
    }[];
    brandLogo?: string;
    brandColor?: string;
    brandBackground?: string;
};

const PurchasingType = ({
    partnerType,
    partnerLink,
    offersValues,
    brandLogo,
    brandColor,
    brandBackground,
}: PurchasingTypeProps) => {
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
                    brandBackground={brandBackground}
                />
            )}
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
            {partnerType === 'API_PARTNER' && (
                <GiftCard
                    title={t('lpc-partner-details:type.gift-card.title')}
                    subtitle={t('lpc-partner-details:type.gift-card.subtitle')}
                    paragraph={t('lpc-partner-details:type.gift-card.paragraph')}
                    terms={t('lpc-partner-details:type.gift-card.terms')}
                    cta={t('lpc-partner-details:type.gift-card.cta')}
                    inputPlaceholder={t('lpc-partner-details:type.gift-card.input-placeholder')}
                    brandLogo={brandLogo}
                    brandColor={brandColor}
                />
            )}
        </div>
    );
};

export default PurchasingType;
