import React from 'react';
import Collapsible from 'react-collapsible';
import Link from 'next/link';
import css from './CustomCollapsible.module.scss';

type CustomCollapsibleProps = {
    trigger: string;
    content: { row: string; link: string }[];
};

const CustomCollapsible = ({ trigger, content }: CustomCollapsibleProps) => {
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
                    <a className={css.content__inner}>{item.row}</a>
                </Link>
            ))}
        </Collapsible>
    );
};

export default CustomCollapsible;
