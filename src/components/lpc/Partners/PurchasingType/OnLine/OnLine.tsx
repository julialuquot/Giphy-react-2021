import React from 'react';
import css from './OnLine.module.scss';
import MainHeading from '@components/common/Heading/MainHeading/MainHeading';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';

type OnLineProps = {
    title: string;
    subtitle: string;
    paragraph: string;
    cta: string;
    terms: string;
    partnerLink: string;
};

const OnLine = ({ title, subtitle, paragraph, cta, terms, partnerLink }: OnLineProps) => {
    return (
        <div className={css.online}>
            <MainHeading title={title} subtitle={subtitle} subtitleColor={'orange'} paragraph={paragraph} />
            <div className={css.online__content}>
                <div
                    className={css.online__content__bg}
                    style={{ backgroundImage: `url('https://source.unsplash.com/random/500*500')` }}
                />
                <a rel="noreferrer" target="_blank" href={partnerLink}>
                    <Button
                        customClass={css.online__content__cta}
                        icon={'/front-static/icons/action/external-link.svg'}
                        variant={'secondary'}
                    >
                        {cta}
                    </Button>
                </a>
            </div>
            <Text variant={'footer'} color={'txt-secondary'}>
                {terms}
            </Text>
        </div>
    );
};

export default OnLine;
