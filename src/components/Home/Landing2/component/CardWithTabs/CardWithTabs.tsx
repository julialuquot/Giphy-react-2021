import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SimpleCard from '@components/Home/Landing2/component/SimpleCard/SimpleCard';
import css from './CardWithTabs.module.scss';
import { withTranslation } from '@i18n';

const namespacesRequired = ['home-page'];

type CardWithTabsProps = {
    t: (string) => string;
};

const CardWithTabs = ({ t }: CardWithTabsProps) => {
    const cardInfo = [
        {
            tabLabel: t('home-page:landing-2.cardInfo.tab-0.label'),
            title: t('home-page:landing-2.cardInfo.tab-0.title'),
            text: t('home-page:landing-2.cardInfo.tab-0.text'),
            cardImg: '/images/bg-birthday.png',
        },
        {
            tabLabel: t('home-page:landing-2.cardInfo.tab-1.label'),
            title: t('home-page:landing-2.cardInfo.tab-1.title'),
            text: t('home-page:landing-2.cardInfo.tab-1.text'),
            cardImg: '/images/bg-birthday.png',
        },
        {
            tabLabel: t('home-page:landing-2.cardInfo.tab-2.label'),
            title: t('home-page:landing-2.cardInfo.tab-2.title'),
            text: t('home-page:landing-2.cardInfo.tab-2.text'),
            cardImg: '/images/bg-birthday.png',
        },
    ];

    return (
        <Tabs className={css.tabs}>
            <TabList className={css.tabs__list}>
                {cardInfo.map((card, index) => (
                    <Tab key={index} className={css.tabs__list__tab} selectedClassName={css.tabs__list__tab__selected}>
                        {card.tabLabel}
                    </Tab>
                ))}
            </TabList>

            {cardInfo.map((card, i) => (
                <TabPanel key={i} className={css.tabs__panel}>
                    <SimpleCard title={card.title} text={card.text} cardImg={card.cardImg} />
                </TabPanel>
            ))}
        </Tabs>
    );
};

export default withTranslation(namespacesRequired)(CardWithTabs);
