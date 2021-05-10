import React, { useState, useEffect } from 'react';
import css from '../GifBasket.module.scss';

type GifFavoriteCardProps = {
    id: string;
    key: number;
    isFavorite: boolean;
    title: string;

};
const GifFavoriteCard = ({ title, id, key, isFavorite }: GifFavoriteCardProps) => {
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
            <li key={key} className={css.gifpanier_td}>
                <p className={css.gifpanier_tr}>
                    <span>{id}</span>
                    <span>{title}</span>
                </p>
            </li>
        )
    );
};

export default GifFavoriteCard;
