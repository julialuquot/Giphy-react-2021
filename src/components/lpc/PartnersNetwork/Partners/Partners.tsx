import React, { useEffect, useState } from 'react';
import PartnersGrid from '@components/lpc/PartnersNetwork/Partners/PartnersGrid/PartnersGrid';
import SearchInput from '@components/common/SearchInput/SearchInput';
import { mockPartners } from './mockPartners';
import { partnerCategory } from '@models/PartnerModel/partnerCategory';
import { partnerPurchasingType } from '@models/PartnerModel/partnerPurchasingType';
import { partnerSort } from '@models/PartnerModel/partnerSort';
import ToggleView from '@components/lpc/PartnersNetwork/Partners/ToggleView/ToggleView';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import SelectSecondary from '@components/common/Dropdowns/SelectSecondary/SelectSecondary';
import css from './Partners.module.scss';

const Partners = () => {
    const { t } = useTranslation('lpc-partners-network');

    const [partnersList, setPartnersList] = useState([]);
    const [partnersCount, setPartnersCount] = useState(null);
    const [activeView, setActiveView] = useState(0);

    // TODO Check Filter after connect WS

    const [searchTerm, setSearchInput] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const [activeCategory, setActiveCategory] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const [activePurchasingMode, setActivePurchasingMode] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
    const [activeSortBy, setActiveSortBy] = useState('');

    useEffect(() => {
        setPartnersCount(partnersList.length);
    }, [partnersList.length]);

    useEffect(() => {
        setPartnersList(mockPartners);
    }, []);

    useEffect(() => {
        const results = mockPartners.filter((item) => item.name.toLowerCase().includes(searchTerm));
        !searchTerm ? setPartnersList(mockPartners) : setPartnersList(results);
    }, [searchTerm]);

    return (
        <div className={css.wrapper}>
            <h2> {t('lpc-partners-network:partners.title')}</h2>
            <div className={css.filter__bar}>
                <div className={css.filter__bar__left}>
                    <SearchInput
                        placeholder={t('lpc-partners-network:partners.filter.search-placeholder')}
                        icon={'/front-static/icons/action/search.svg'}
                        onSearch={(term) => setSearchInput(term)}
                    />
                    <SelectSecondary
                        options={partnerCategory.map((item) => {
                            return {
                                value: item.value,
                                label: t(`lpc-partners-network:partners.category.${item.value}`),
                            };
                        })}
                        placeholder={t('lpc-partners-network:partners.filter.category-placeholder')}
                        closedIcon={'/front-static/icons/navigation/caret-down.svg'}
                        openIcon={'/front-static/icons/navigation/caret-down.svg'}
                        onSelect={(value) => setActiveCategory(value)}
                        customSelect={css.select__category}
                        customMenu={css.select__category__menu}
                        customControl={css.select__category__control}
                    />
                    <SelectSecondary
                        options={partnerPurchasingType.map((item) => {
                            return {
                                value: item.value,
                                label: t(`lpc-partners-network:partners.purchasing-mode.${item.value}`),
                            };
                        })}
                        placeholder={t('lpc-partners-network:partners.filter.purchasing-mode-placeholder')}
                        closedIcon={'/front-static/icons/navigation/caret-down.svg'}
                        openIcon={'/front-static/icons/navigation/caret-down.svg'}
                        onSelect={(value) => setActivePurchasingMode(value)}
                        customSelect={css.select__mode}
                        customMenu={css.select__mode__menu}
                        customControl={css.select__mode__control}
                    />
                </div>
                <div className={css.filter__bar__right}>
                    <SelectSecondary
                        options={partnerSort}
                        placeholder={t('lpc-partners-network:partners.filter.sort-placeholder')}
                        closedIcon={'/front-static/icons/navigation/caret-down.svg'}
                        openIcon={'/front-static/icons/navigation/caret-down.svg'}
                        onSelect={(value) => setActiveSortBy(value)}
                        customSelect={css.select__sort}
                        customMenu={css.select__sort__menu}
                        customControl={css.select__sort__control}
                    />
                    <ToggleView onToggleView={(view) => setActiveView(view)} />
                </div>
            </div>
            <div className={css.count}>
                <span>{partnersCount}</span>
                <Text variant={'caption_00'}>
                    {partnersCount === 0
                        ? t('lpc-partners-network:partners.partner-available')
                        : t('lpc-partners-network:partners.partner-available_plural')}
                </Text>
            </div>
            <PartnersGrid partners={partnersList} activeView={activeView} />
        </div>
    );
};

export default Partners;
