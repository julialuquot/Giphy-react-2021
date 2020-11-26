import React, { useState } from 'react';
import SimpleCard from '@components/lpc/Home/Landing2/component/SimpleCard/SimpleCard';

import css from './CardWithTabsDesktop.module.scss';

type CardWithTabsProps = {
    cardInfo: any[];
};

const CardWithTabsDesktop = ({ cardInfo }: CardWithTabsProps) => {
    const [activeTab, setActiveTab] = useState(cardInfo[0].tabId);

    const handleClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className={css.tabs}>
            <div className={css.tabs__panel}>
                <SimpleCard
                    title={cardInfo[activeTab].title}
                    text={cardInfo[activeTab].text}
                    cardImg={cardInfo[activeTab].cardImg}
                />
                <div className={css.tabs__list}>
                    {cardInfo.map((card) => (
                        <div key={card.tabId}>
                            <div
                                onClick={() => handleClick(card.tabId)}
                                className={`${css.tabs__list__tab} ${
                                    activeTab === card.tabId && css.tabs__list__tab__selected
                                }`}
                            >
                                {card.tabLabel}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardWithTabsDesktop;
