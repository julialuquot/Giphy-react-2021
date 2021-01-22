import React from 'react';
import Collapsible from 'react-collapsible';
import Button from '@components/common/Button/Button';
import css from './FaqCollapsible.module.scss';
import Text from '@components/common/Text/Text';
import Link from 'next/link';
import { getRoute, ROUTE } from '@services/http/Route';

type CustomCollapsibleProps = {
    content: { question: string; answer: string }[];
    title: string;
    subtitle: string;
    cta: string;
};

const FaqCollapsible = ({ content, title, subtitle, cta }: CustomCollapsibleProps) => {
    return (
        <div className={css.wrapper}>
            <div className={css.wrapper__content}>
                <h2>{title}</h2>
                <Text customClass={css.wrapper__content__txt} variant={'body_00'} color={'txt-primary'}>
                    {subtitle}
                </Text>
                <div className={css.container}>
                    {content.map((item) => {
                        return (
                            <div key={item.question}>
                                <Collapsible
                                    classParentString={css.collapsible}
                                    triggerClassName={css.trigger}
                                    triggerOpenedClassName={css.trigger__opened}
                                    contentInnerClassName={css.content__inner}
                                    contentOuterClassName={css.content__outer}
                                    triggerTagName={'div'}
                                    trigger={item.question}
                                    easing={'ease-in-out'}
                                >
                                    <div className={css.content__inner}>{item.answer}</div>
                                </Collapsible>
                            </div>
                        );
                    })}
                </div>

                <Link href={getRoute(ROUTE.LPC.FAQ, null)}>
                    <a>
                        <Button variant={'primary'} width={'150px'} mobileFullWidth={true}>
                            {cta}
                        </Button>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default FaqCollapsible;
