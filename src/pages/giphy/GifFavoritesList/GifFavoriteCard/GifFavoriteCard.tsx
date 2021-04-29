import React, { useState, useEffect } from 'react';
import css from '../GifBasket.module.scss';

type GifFavoriteCardProps = {
    id: string;
    key: string;
    isFavorite: boolean;
    title: string;
    isItemIsFavorite: (favoriteList: object) => void;
};
const GifFavoriteCard = ({ title, id, key, isFavorite, isItemIsFavorite }: GifFavoriteCardProps) => {
    const [initFavorite, setInitFavorite] = useState(isFavorite);
    const [favorite, setFavorite] = useState([title, id]);

    useEffect(() => {
        setInitFavorite(initFavorite);
        if (initFavorite) {
            setFavorite(favorite);
        }
    });

    return (
        favorite && (
            <li key={key} onChange={isItemIsFavorite} className={css.gifpanier_td}>
                <p className={css.gifpanier_tr}>
                    <span>{id}</span>
                    <span>{title}</span>
                </p>
            </li>
        )
    );
};

export default GifFavoriteCard;
