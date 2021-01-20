import React from 'react';
import SecondaryHeading from '@components/common/Heading/SecondaryHeading/SecondaryHeading';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import css from './OnLine.module.scss';

type OnLineProps = {
    title: string;
    subtitle: string;
    paragraph: string;
    cta: string;
    terms: string;
    partnerLink: string;
    brandBackground: string;
};

const OnLine = ({ title, subtitle, paragraph, cta, terms, partnerLink, brandBackground }: OnLineProps) => {
    return (
        <div className={css.online}>
            <SecondaryHeading title={title} subtitle={subtitle} paragraph={paragraph} />
            <div className={css.online__content}>
                <div className={css.online__content__bg} style={{ backgroundImage: `url(${brandBackground})` }} />
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
