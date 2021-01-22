import React from 'react';
import Collapsible from 'react-collapsible';
import Link from 'next/link';
import Text from '@components/common/Text/Text';
import css from './FooterCollapsible.module.scss';

type CustomCollapsibleProps = {
    trigger: string;
    content: { row: string; link: string; icon?: string }[];
};

const FooterCollapsible = ({ trigger, content }: CustomCollapsibleProps) => {
    return (
        <Collapsible
            classParentString={css.collapsible}
            triggerClassName={css.trigger}
            triggerOpenedClassName={css.trigger__opened}
            contentInnerClassName={css.content__inner}
            contentOuterClassName={css.content__outer}
            triggerTagName={'div'}
            trigger={trigger}
            easing={'ease-in-out'}
        >
            {content.map((item) => (
                <Link key={item.row} href={item.link}>
                    <a className={css.content__inner}>
                        <Text variant={'body_02'} color={'txt-secondary'}>
                            {item.row}
                            {item.icon && <img className={css.content__icon} src={item.icon} alt="link" />}
                        </Text>
                    </a>
                </Link>
            ))}
        </Collapsible>
    );
};

export default FooterCollapsible;
