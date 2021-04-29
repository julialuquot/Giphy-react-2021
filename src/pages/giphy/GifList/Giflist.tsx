import React from 'react';
import GifCard from './GifCard/index';
import css from './GifList.module.scss';
type GifListProps = {
    list;
    onSelectedGif;
    isItemIsFavorite;
};
const GifList = ({ list, onSelectedGif, isItemIsFavorite }: GifListProps) => {
    const removeDuplicateIdOfList = (id) => {
        const array = [];
        if (array.indexOf(id) === -1) {
            return array.push(id);
        } else if (array.indexOf(id) > -1) {
            return array.filter((item) => item.id === id);
        }
    };

    return (
        <div className={css.gifList__contain}>
            <div className={css.gifList}>
                <ul className={css.items_list}>
                    {list.map((selectedGif) => {
                        return (
                            <GifCard
                                key={selectedGif.id}
                                removeDuplicateIdOfList={(id) => removeDuplicateIdOfList(id)}
                                onSelectedGif={onSelectedGif}
                                isItemIsFavorite={isItemIsFavorite}
                                title={selectedGif.title}
                                id={selectedGif.id}
                                isFavorite={selectedGif.isFavorite}
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
