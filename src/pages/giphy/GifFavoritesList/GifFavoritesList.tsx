import React from 'react';
import GifFavoriteCard from './GifFavoriteCard/GifFavoriteCard';
import css from './GifBasket.module.scss';
type GifFavoritesListProps = {
    favoriteList;
};
const GifFavoritesList = ({ favoriteList }: GifFavoritesListProps) => {
    return (
        favoriteList?.length > 0 && (
            <div className={css.gifpanier}>
                <h4>Liste des Favoris:</h4>
                <div className={css.gifbasket_table}>
                    <ul>
                        {favoriteList &&
                            favoriteList.map((gif) => {
                                return (
                                    <GifFavoriteCard
                                        key={gif.id}
                                        isFavorite={gif.isFavorite}
                                        id={gif.id}
                                        title={gif.title}
                                    />
                                );
                            })}
                    </ul>
                </div>
            </div>
        )
    );
};
export default GifFavoritesList;
