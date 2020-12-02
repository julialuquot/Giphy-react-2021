import React, { useState } from 'react';
import css from './Banner.module.scss';
import { useTranslation } from '@i18n';
import Image from 'next/image';
import Button from '@components/common/Button/Button';

type BannerProps = {
    text: string;
};

const Banner = ({ text }: BannerProps) => {
    const { t } = useTranslation('informations');

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${css.banner} ${isOpen && css.banner__open}`}>
            <div onClick={() => handleClick()} className={css.banner__title}>
                <Image src="/front-static/icons/alert-outline.svg" alt="alert" width="24" height="24" />
                <p>{t('informations:tutorial.banner.title')}</p>
                <img className={css.banner__title__chevron} src="/front-static/icons/chevron-up.svg" alt="chevron-up" />
            </div>
            <div className={`${css.banner__content} ${isOpen && css.banner__content__show}`}>
                <p>{text}</p>
                <Button
                    customClass={css.banner__content__btn}
                    width={'173px'}
                    height={'38px'}
                    variant="secondary"
                    size="medium"
                    type={'button'}
                >
                    {t('informations:btn.show-example')}
                </Button>
            </div>
        </div>
    );
};

export default Banner;
