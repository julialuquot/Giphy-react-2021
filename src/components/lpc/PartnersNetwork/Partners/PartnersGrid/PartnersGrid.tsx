import React, { useState, useEffect } from 'react';
import css from './PartnersGrid.module.scss';
import Card from '@components/common/Card/Card';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import CardList from '@components/common/CardList/CardList';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { M_DEVICE } from '@components/lpc/Constants';

type PartnersGridProps = {
    partners: {
        _id: string;
        description: string;
        color: string;
        picture: string;
        category: string;
        name: string;
    }[];
    activeView: number;
};

const PartnersGrid = ({ partners, activeView }: PartnersGridProps) => {
    const { t } = useTranslation('lpc-partners-network');
    const { width } = useWindowSize();

    const GRID = width > M_DEVICE ? 12 : 4;
    const LIST = width > M_DEVICE ? 6 : 4;

    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(GRID);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(null);

    useEffect(() => {
        setCurrentPage(1);
    }, [partners]);

    useEffect(() => {
        setEndIndex(currentPage * itemPerPage);
    }, [currentPage, itemPerPage]);

    useEffect(() => {
        setStartIndex(endIndex - itemPerPage);
    }, [currentPage, endIndex, itemPerPage]);

    useEffect(() => {
        if (activeView === 0) {
            setCurrentPage(1);
            setItemPerPage(GRID);
        }
        if (activeView === 1) {
            setCurrentPage(1);
            setItemPerPage(LIST);
        }
    }, [GRID, LIST, activeView]);

    const onLoadNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const onLoadPrevious = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            {activeView === 0 ? (
                <div className={css.grid}>
                    {partners.slice(startIndex, endIndex).map((partner) => (
                        <Card
                            key={partner._id}
                            uniq={partner._id}
                            cardText={partner.description}
                            cardColor={partner.color}
                            cardImg={partner.picture}
                            cardSubtitle={partner.category}
                            cardTitle={partner.name}
                        />
                    ))}
                </div>
            ) : (
                <div className={css.list}>
                    {partners.slice(startIndex, endIndex).map((partner) => (
                        <CardList
                            key={partner._id}
                            uniq={partner._id}
                            cardText={partner.description}
                            cardColor={partner.color}
                            cardImg={partner.picture}
                            cardSubtitle={partner.category}
                            cardTitle={partner.name}
                        />
                    ))}
                </div>
            )}
            <div className={css.btn__container}>
                {currentPage !== 1 && (
                    <Button
                        onClick={() => onLoadPrevious()}
                        width={'210px'}
                        height={'48px'}
                        margin={'8px 4px 0 0'}
                        variant={'secondary'}
                        customClass={css.documents__btn__container__custom}
                    >
                        {t('lpc-partners-network:partners.cta.load-previous')}
                    </Button>
                )}

                {startIndex < partners.length - itemPerPage && (
                    <Button
                        onClick={() => onLoadNext()}
                        width={'210px'}
                        height={'48px'}
                        margin={'8px 0 0 4px'}
                        variant={'secondary'}
                        customClass={css.documents__btn__container__custom}
                    >
                        {t('lpc-partners-network:partners.cta.load-next')}
                    </Button>
                )}
            </div>
        </>
    );
};
export default PartnersGrid;
