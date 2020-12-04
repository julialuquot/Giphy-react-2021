import React, { useState, useEffect } from 'react';
import css from './TabNavigation.module.scss';

type TabNavigation = {
    onTabChange: (string) => void;
    tabTitle0: string;
    tabTitle1: string;
};

const TabNavigation = ({ onTabChange, tabTitle0, tabTitle1 }: TabNavigation) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        onTabChange(activeTab);
    }, [activeTab, onTabChange]);

    return (
        <div className={css.navigation}>
            <span className={`${css.tab} ${activeTab === 0 && css.tab__selected}`} onClick={() => handleClick(0)}>
                {tabTitle0}
            </span>
            <span className={`${css.tab} ${activeTab === 1 && css.tab__selected}`} onClick={() => handleClick(1)}>
                {tabTitle1}
            </span>
        </div>
    );
};

export default TabNavigation;
