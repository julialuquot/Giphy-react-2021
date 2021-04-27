import React, { useEffect, useState } from 'react';
import GifCard from './GifCard/index';
import css from './GifList.module.scss';

const GifList = ({ list, onSelectedGif, isItemIsFavorite, favoriteList }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    /*  const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            return onSelectedGif;
        }
    };*/

    const removeDuplicateIdOfList = (id) => {
        if (favoriteList.indexOf(id) === -1) {
            console.log('Le nouveau tableau est : ' + favoriteList);
            return favoriteList.push(id);
        } else if (favoriteList.indexOf(id) > -1) {
            console.log(favoriteList + ' existe déjà dans le tableau.');
            return favoriteList.filter((item) => item.id === id);
        }
    };

    return (
        <div className={css.gifList__contain}>
            <div className={css.gifList}>
                <ul className={css.items_list}>
                    {list.map((selectedGif) => {
                        return (
                            <GifCard
                                url={selectedGif.url}
                                key={selectedGif.id}
                                favoriteList={favoriteList}
                                removeDuplicateIdOfList={(id) => removeDuplicateIdOfList(id)}
                                onSelectedGif={onSelectedGif}
                                isItemIsFavorite={isItemIsFavorite}
                                title={selectedGif.title}
                                id={selectedGif.id}
                                isFavorite={isFavorite}
                                src={selectedGif.images.downsized.url}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
export default GifList;
