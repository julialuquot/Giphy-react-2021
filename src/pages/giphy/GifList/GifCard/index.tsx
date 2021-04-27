import React, { useState, useEffect } from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import css from './GifCard.module.scss';

type GifCardProps = {
    id: string;
    key: string;
    src: string;
    title: string;
    url: string;
    isFavorite: boolean;
    favoriteList: object;
    isItemIsFavorite: (favoriteList: object) => void;
    onSelectedGif: (id: string, title: string) => void;
    removeDuplicateIdOfList: (id: string) => void;
};

const GifCard = ({
    id,
    key,
    src,
    title,
    url,
    isFavorite,
    favoriteList,
    isItemIsFavorite,
    onSelectedGif,
    removeDuplicateIdOfList,
}: GifCardProps) => {
    const FavoriteIcon = () => {
        if (isFavorite) {
            return <IoIosHeart />;
        } else {
            return <IoIosHeartEmpty style={{ color: 'back' }} />;
        }
    };

    return (
        <div className={css.gifcard}>
            <li
                key={key}
                onClick={() => {
                    onSelectedGif(id, title);
                    isItemIsFavorite(favoriteList);
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

/*// This gets called on every request
export const getServerSideProps = async (ctx) => {
    // Fetch data from external API
    const id = await ctx.query.reference;
    console.log('query', ctx.query);
    const url = await fetch(`https://api.giphy.com/v1/gifs/${id}`).then((res) => res.json());
    console.log('url', url);

    // Pass data to the page via props
    return {
        props: {
            url,
        },
    };
};*/

export default GifCard;
