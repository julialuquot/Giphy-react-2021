import React, { useState, useEffect } from 'react';
import css from './ToggleView.module.scss';

type SvgProps = {
    color: string;
};

type ToggleViewProps = {
    onToggleView: (number) => void;
};

const ToggleView = ({ onToggleView }: ToggleViewProps) => {
    const [activeView, setActiveView] = useState(0);
    const onChangeView = (view) => {
        setActiveView(view);
    };

    useEffect(() => {
        onToggleView(activeView);
    }, [activeView, onToggleView]);

    const GridIcon = ({ color, ...props }: SvgProps) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
                <g fill="none" fillRule="evenodd">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        fill={color}
                        fillRule="nonzero"
                        d="M9 13a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2zm10 0a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2zM9 15H5v4h4v-4zm10 0h-4v4h4v-4zM9 3a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm10 0a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2zM9 5H5v4h4V5zm10 0h-4v4h4V5z"
                    />
                </g>
            </svg>
        );
    };
    const ListIcon = ({ color, ...props }: SvgProps) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
                <path
                    fill={color}
                    d="M4 16a1 1 0 110 2 1 1 0 010-2zm16.06 0c.52 0 .94.42.94.94v.12c0 .52-.42.94-.94.94H7.94c-.52 0-.94-.42-.94-.94v-.12c0-.52.42-.94.94-.94h12.12zM4 11a1 1 0 110 2 1 1 0 010-2zm16.06 0c.52 0 .94.42.94.94v.12c0 .52-.42.94-.94.94H7.94c-.52 0-.94-.42-.94-.94v-.12c0-.52.42-.94.94-.94h12.12zM4 6a1 1 0 110 2 1 1 0 010-2zm16.06 0c.52 0 .94.42.94.94v.12c0 .52-.42.94-.94.94H7.94C7.42 8 7 7.58 7 7.06v-.12c0-.52.42-.94.94-.94h12.12z"
                    fillRule="nonzero"
                />
            </svg>
        );
    };

    return (
        <div className={css.view}>
            <div
                className={`${css.view__icon} ${activeView === 0 && css.view__icon__active}`}
                onClick={() => onChangeView(0)}
            >
                <GridIcon color={activeView === 0 ? '#ffffff' : '#111e3d'} />
            </div>
            <div
                className={`${css.view__icon} ${activeView === 1 && css.view__icon__active}`}
                onClick={() => onChangeView(1)}
            >
                <ListIcon color={activeView === 1 ? '#ffffff' : '#111e3d'} />
            </div>
        </div>
    );
};

export default ToggleView;
