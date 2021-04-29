import React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import css from './GifCard.module.scss';

type GifCardProps = {
    id: string;
    key: string;
    src: string;
    title: string;
    isFavorite: boolean;
    isItemIsFavorite: (id: string) => void;
    onSelectedGif: (id: string, title: string) => void;
    removeDuplicateIdOfList: (id: string) => void;
};

const GifCard = ({
    id,
    key,
    src,
    title,
    isFavorite,
    isItemIsFavorite,
    onSelectedGif,
    removeDuplicateIdOfList,
}: GifCardProps) => {
    const FavoriteIcon = () => {
        if (isFavorite) {
            return <IoIosHeart />;
        } else {
            return <IoIosHeartEmpty />;
        }
    };

    return (
        <div className={css.gifcard}>
            <li
                key={key}
                onClick={() => {
                    onSelectedGif(id, title);
                    isItemIsFavorite(id);
                    removeDuplicateIdOfList(id);
                }}
            >
                <img id={id} src={src} alt={title} />
                <FavoriteIcon />
                <p>{title}</p>
            </li>
        </div>
    );
};

export default GifCard;
