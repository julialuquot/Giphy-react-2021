import React, { useState } from 'react';
import Text from '@components/common/Text/Text';
import { useTranslation } from '@i18n';
import CustomSlider from '@components/common/CustomSlider/CustomSlider';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { M_DEVICE } from '@components/lpc/Constants';
import css from './HowItWorks.module.scss';

type HowItWorksProps = {
    tutorial: {
        title: { fr: string; en: string };
        description: { fr: string; en: string };
        order: number;
        imageDesktop?: string;
        imageMobile?: string;
    }[];
};

const HowItWorks = ({ tutorial }: HowItWorksProps) => {
    const { t } = useTranslation('lpc-partner-details');
    const { width } = useWindowSize();

    const [activeStep, setActiveStep] = useState(null);

    const paging = (index) => {
        return (
            <div>
                {width < M_DEVICE ? (
                    <span className={`${css.slider__dots} ${activeStep === index && css.slider__dots__active}`} />
                ) : (
                    <div className={css.slider__pages}>
                        <div
                            className={`${css.slider__pages__indicator} ${
                                activeStep === index && css.slider__pages__indicator__active
                            } `}
                        />
                        {/* eslint-disable-next-line react/prop-types */}
                        <h5>{tutorial[index].title.fr}</h5>
                        <Text variant={'body_01'} color={'txt-primary'}>
                            {/* eslint-disable-next-line react/prop-types */}
                            {tutorial[index].description.fr}
                        </Text>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={css.tutorial}>
            <h2>{t('lpc-partner-details:tutorial.title')}</h2>
            <Text customClass={css.wrapper__content__txt} variant={'body_01'} color={'txt-primary'}>
                {t('lpc-partner-details:tutorial.subtitle')}
            </Text>

            <div className={css.tutorial__container}>
                <CustomSlider
                    onActiveStep={(value) => setActiveStep(value)}
                    customPaging={(index) => paging(index)}
                    sliderClass={css.slider}
                    autoplay={false}
                    dots={true}
                >
                    {tutorial.map((item) => {
                        return (
                            <div key={item.order} className={css.card}>
                                <div
                                    className={css.card__img}
                                    style={{
                                        backgroundImage: `url(${
                                            width > M_DEVICE ? item.imageDesktop : item.imageMobile
                                        })`,
                                    }}
                                />
                            </div>
                        );
                    })}
                </CustomSlider>
            </div>
        </div>
    );
};

export default HowItWorks;
