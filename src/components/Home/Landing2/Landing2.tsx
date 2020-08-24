import React from 'react';
import CardWithTabs from '@components/Home/Landing2/component/CardWithTabs/CardWithTabs';
import Text from '@components/common/Text/Text';
import Avatar from '@components/common/Avatar/Avatar';
import Label from '@components/common/Label/Label';
import css from './Landing2.module.scss';
import { withTranslation } from '@i18n';

type Landing2Props = {
    t: (string) => string;
};

const namespacesRequired = ['home-page'];

const Landing2 = ({ t }: Landing2Props) => {
    return (
        <div className={css.container}>
            <div className={css.wrapper}>
                <div className={css.icon}>
                    <Avatar
                        customClass={css.avatar__accent}
                        imageSrc={'images/profile-picture-1.jpg'}
                        color="brand-accent"
                        label={t('home-page:landing-2.avatar.label-1')}
                    />
                    <Avatar
                        customClass={css.avatar__secondary}
                        imageSrc={'images/profile-picture-2.jpg'}
                        color="brand-secondary"
                        label={t('home-page:landing-2.avatar.label-2')}
                    />
                    <Avatar
                        customClass={css.avatar__success}
                        imageSrc={'images/profile-picture-3.jpg'}
                        color="ui-success"
                        label={t('home-page:landing-2.avatar.label-3')}
                    />

                    <Label customClass={css.label__success} color={'ui-success'}>
                        {t('home-page:landing-2.label.txt-1')}
                    </Label>
                    <Label customClass={css.label__primary_left} color={'brand-primary'}>
                        {t('home-page:landing-2.label.txt-2')}
                    </Label>
                    <Label customClass={css.label__secondary} color={'brand-secondary'}>
                        {t('home-page:landing-2.label.txt-3')}
                    </Label>
                    <Label customClass={css.label__primary_right} color={'brand-primary'}>
                        {t('home-page:landing-2.label.txt-4')}
                    </Label>
                </div>

                <div className={css.title}>
                    <h1 className={css.title__primary}>{t('home-page:landing-2.main-title-1')}</h1>
                    <h1>{t('home-page:landing-2.main-title-2')}</h1>
                    <Text customClass={css.title__text} variant={'body_01'} color={'ui-secondary'}>
                        {t('home-page:landing-2.subTitle')}
                    </Text>
                </div>
                <CardWithTabs />
            </div>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing2);
