import React from 'react';
import CustomSlider from '@components/common/CustomSlider/CustomSlider';
import useWindowSize from '@components/common/hooks/useWindowSize';
import SecondaryHeading from '@components/common/Heading/SecondaryHeading/SecondaryHeading';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import { M_DEVICE } from '@components/lpc/Constants';
import css from './Voucher.module.scss';

type VoucherProps = {
    title: string;
    subtitle: string;
    paragraph: string;
    cta: string;
    terms: string;
    offersValues: {
        ordinalVPGC: number;
        amountVPGC: number;
    }[];
};

const Voucher = ({ title, subtitle, paragraph, cta, terms, offersValues }: VoucherProps) => {
    const { width } = useWindowSize();

    const formatAmount = (amount) => {
        return `${amount / 100} €`;
    };

    return (
        <div className={css.voucher}>
            <SecondaryHeading title={title} subtitle={subtitle} paragraph={paragraph} />
            {width > M_DEVICE ? (
                <div className={css.voucher__content}>
                    {offersValues.map((offer) => (
                        <div key={offer.ordinalVPGC} className={css.voucher__content__card}>
                            <span>{formatAmount(offer.amountVPGC)}</span>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <CustomSlider autoplay={false} sliderClass={css.voucher__content__slider}>
                        {offersValues.map((offer) => (
                            <div key={offer.ordinalVPGC} className={css.voucher__content__card}>
                                <span>{formatAmount(offer.amountVPGC)}</span>
                            </div>
                        ))}
                    </CustomSlider>
                </div>
            )}

            <Button customClass={css.voucher__content__cta} variant={'primary'}>
                {cta}
            </Button>
            <Text variant={'footer'} color={'txt-secondary'}>
                {terms}
            </Text>
        </div>
    );
};

export default Voucher;