import React, {useEffect, useState} from 'react';
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io';
import css from './GifCard.module.scss';

type GifCardProps = {
    id: string;
    key: string;
    src: string;
    title: string;
    favorite: boolean;
    favoriteItem: { id: string, title: string };
    isItemIsFavorite: (favoriteItem: object) => void;
    onSelectedGif: (id: string, title: string) => void
};

const GifCard = ({
                     id,
                     key,
                     src,
                     title,
                     favoriteItem,
                     isItemIsFavorite,
                     onSelectedGif,
                 }: GifCardProps) => {

    const FavoriteIcon = () => {
        if (isFavorite) {
            return <IoIosHeart style={{color: 'red'}}/>;
        } else {
            return <IoIosHeartEmpty/>;
        }
    };
    const [isFavorite, setIsFavorite] = useState(false);
//function qui va récupérer depuis le localstorage si c'est favoris ou pas
    const handleFavorite = () => {
        if (!isFavorite) {
            return setIsFavorite(true)
        } else {
            return setIsFavorite(false);

        }
    }
    console.log('isFavorite', isFavorite);
    return (
        <div className={css.gifcard}>
            <li
                key={key}
                onClick={() => {
                    onSelectedGif(id, title);
                    isItemIsFavorite(favoriteItem);
                    handleFavorite();
                }}
            >
                <img id={id} src={src} alt={title}/>
                <FavoriteIcon/>
                <p>{title}</p>
            </li>
        </div>
    );
};

export default GifCard;
