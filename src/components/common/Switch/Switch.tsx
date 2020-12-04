import React, { useState, useEffect } from 'react';
import css from './Switch.module.scss';

type SwitchProps = {
    customClass?: string;
    children?: React.ReactNode;
    defaultOn: boolean;
    onChange: any;
};

const Switch = ({ customClass, defaultOn, onChange, children, ...props }: SwitchProps) => {
    const [active, setActive] = useState(defaultOn);

    useEffect(() => {
        onChange(active);
    }, [active, onChange]);

    return (
        <div className={`${css.cg__switch} ${customClass || ''}`} {...props}>
            <span
                className={`${css.cg__switch} ${css.cg__switch__toggle} ${active ? css.cg__switch__toggle__on : ''}`}
                onClick={() => setActive(!active)}
                role="button"
                aria-pressed="true"
            />
            {children && <span className={`${css.cg__switch} ${css.cg__switch__label}}`}>{children}</span>}
        </div>
    );
};

export default Switch;
