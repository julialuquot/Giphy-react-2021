import React from 'react';
import css from './Avatar.module.scss';
import { useTranslation } from '@i18n';
import Link from 'next/link';

type AvatarProps = {
    width: string;
    height: string;
    color: string;
    name: string;
    initial: string;
    onToggleProfil?: () => void;
    settings?: true;
};

const Avatar = ({ width, height, color, name, initial, onToggleProfil, settings }: AvatarProps) => {
    const { t } = useTranslation('dashboard-header');

    const style = {
        width: width,
        height: height,
        backgroundColor: color,
    };

    return (
        <div onClick={() => onToggleProfil && onToggleProfil()} className={css.avatar}>
            <div className={css.avatar__circle} style={style}>
                <span className={css.avatar__circle__initial}>{initial}</span>
            </div>
            <div className={css.avatar__infos}>
                <span className={css.avatar__infos__name}>{name}</span>
                {settings && (
                    <Link href={'#'}>
                        <a className={css.avatar__infos__settings}>{t('dashboard-header:settings')}</a>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Avatar;
