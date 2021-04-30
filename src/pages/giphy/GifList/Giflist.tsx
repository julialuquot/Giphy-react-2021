import React, {useEffect, useState} from 'react';
import GifCard from './GifCard/index';
import css from './GifList.module.scss';
type GifListProps = {
    list;
    onSelectedGif;
    isItemIsFavorite;
};
const GifList = ({ list, onSelectedGif, isItemIsFavorite }: GifListProps) => {

    return (
        <div className={css.gifList__contain}>
            <div className={css.gifList}>
                <ul className={css.items_list}>
                    {list.map((selectedGif) => {
                        return (
                            <GifCard
                                favorite={selectedGif.isFavorite}
                                favoriteItem={selectedGif}
                                key={selectedGif.id}
                                onSelectedGif={onSelectedGif}
                                isItemIsFavorite={isItemIsFavorite}
                                title={selectedGif.title}
                                id={selectedGif.id}
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
