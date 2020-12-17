import React, { useState, useEffect } from 'react';
import css from './Favorites.module.scss';
import { useTranslation } from '@i18n';
import Card from '@components/common/Card/Card';
import Header from '@components/lpc/PartnersNetwork/Fav/Header/Header';

const Favorites = () => {
    const { t } = useTranslation('lpc-partners-network');

    const [favoritesPartners, setFavoritesPartners] = useState([]);

    const mockFavoritePartners = [
        {
            uniq: 1,
            img: '/front-static/images/profile-picture-1.jpg',
            color: '#ff6900',
            name: 'Fav 1',
            category: 'Sport',
            description: 'je suis du text de ouf',
        },
        {
            uniq: 2,
            img: '/front-static/images/profile-picture-2.jpg',
            color: '#E22B76',
            name: 'Fav 2',
            category: 'Jeux',
            description: 'je suis du text de ouf',
        },
        {
            uniq: 3,
            img: '/front-static/images/profile-picture-3.jpg',
            color: '#2BE283',
            name: 'Fav3',
            category: 'Voyages',
            description: 'je suis du text de ouf',
        },
    ];

    useEffect(() => {
        setFavoritesPartners(mockFavoritePartners);
    }, []);

    return (
        <div className={css.wrapper}>
            <div className={css.favorites}>
                <div className={css.favorites__header}>
                    <Header />
                </div>
                <div className={css.favorites__card}>
                    <h3> {t('lpc-partners-network:favorites.title')}</h3>
                    <div className={css.favorites__card__grid}>
                        {favoritesPartners.length > 0 &&
                            favoritesPartners.map((partner) => (
                                <Card
                                    uniq={partner.uniq}
                                    key={partner.uniq}
                                    cardImg={partner.img}
                                    cardColor={partner.color}
                                    cardTitle={partner.name}
                                    cardSubtitle={partner.category}
                                    cardText={partner.description}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;
