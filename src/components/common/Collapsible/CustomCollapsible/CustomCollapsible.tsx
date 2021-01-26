import React from 'react';
import Collapsible from 'react-collapsible';
import Link from 'next/link';
import Text from '@components/common/Text/Text';
import css from './CustomCollapsible.module.scss';

type CustomCollapsibleProps = {
    trigger: string;
    content: { row: string; link: string; icon?: string }[];
    customCollapsible?: string;
    customTrigger?: string;
    customTriggerOpened?: string;
    customTriggerInner?: string;
    customTriggerOuter?: string;
    customText?: string;
};

const CustomCollapsible = ({
    trigger,
    content,
    customCollapsible,
    customTrigger,
    customTriggerOpened,
    customTriggerInner,
    customTriggerOuter,
    customText,
}: CustomCollapsibleProps) => {
    return (
        <Collapsible
            classParentString={`${css.collapsible} ${customCollapsible || ''}`}
            trigger={trigger}
            triggerClassName={`${css.trigger} ${customTrigger || ''}`}
            triggerOpenedClassName={`${css.trigger__opened} ${customTriggerOpened || ''}`}
            contentInnerClassName={`${css.content__inner} ${customTriggerInner || ''}`}
            contentOuterClassName={`${css.content__outer} ${customTriggerOuter || ''}`}
            triggerTagName={'div'}
            easing={'ease-in-out'}
        >
            {content.map((item) => (
                <Link key={item.row} href={item.link}>
                    <a className={css.content__inner}>
                        <Text customClass={customText || ''} variant={'body_02'} color={'txt-secondary'}>
                            {item.row}
                            {item.icon && <img className={css.content__icon} src={item.icon} alt="link" />}
                        </Text>
                    </a>
                </Link>
            ))}
        </Collapsible>
    );
};

export default CustomCollapsible;
