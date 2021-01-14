import React from 'react';
import MainHeading from '@components/common/Heading/MainHeading/MainHeading';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import css from './Voucher.module.scss';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { M_DEVICE } from '@components/lpc/Constants';
import CustomSlider from '@components/common/CustomSlider/CustomSlider';

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

    return (
        <div className={css.voucher}>
            <MainHeading title={title} subtitle={subtitle} subtitleColor={'orange'} paragraph={paragraph} />
            {width > M_DEVICE ? (
                <div className={css.voucher__content}>
                    {offersValues.map((offer) => (
                        <div key={offer.ordinalVPGC} className={css.voucher__content__card}>
                            {offer.amountVPGC}
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <CustomSlider autoplay={false} sliderClass={css.voucher__content__slider}>
                        {offersValues.map((offer) => (
                            <div key={offer.ordinalVPGC} className={css.voucher__content__slider__card}>
                                {offer.amountVPGC}
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
