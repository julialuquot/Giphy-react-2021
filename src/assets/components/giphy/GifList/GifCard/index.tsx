import React, {useEffect, useState} from 'react';
import {IoIosHeart, IoIosHeartEmpty} from 'react-icons/io';
import css from './GifCard.module.scss';
import { getRoute, ROUTE } from '@services/route/Route';


type GifCardProps = {
    favorite: boolean;
    id: string;
    title: string;
    key: number;
    gifDetails: {id:string,title:string,src:string}
    src: string;
    favoriteItem: { id: string, title: string };
    isItemIsFavorite: (favoriteItem: object) => void;
    onSelectedGif: (id: string, title: string) => void;
};

const GifCard = ({id, title, onSelectedGif, key, src, isItemIsFavorite, favoriteItem}: GifCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
        if (!isFavorite) {
            return setIsFavorite(true)
        } else {
            return setIsFavorite(false);
        }
    }

    const FavoriteIcon = () => {
        if (isFavorite) {
            return <IoIosHeart style={{color: 'red'}}/>;
        } else {
            return <IoIosHeartEmpty/>;
        }
    };

    return (
        <div className={css.gifcard}>
            <li key={key}
                onClick={() => {
                    onSelectedGif(id, title);
                    isItemIsFavorite(favoriteItem);
                    handleFavorite();
                }}
            >
                <img id={id} src={src} alt={title}/>
                <a href={getRoute(ROUTE.GIPHY, id)} target='_blank'>
                <FavoriteIcon />
                </a>
                <p>{title}</p>
            </li>

        </div>
    );
};

export default GifCard;

