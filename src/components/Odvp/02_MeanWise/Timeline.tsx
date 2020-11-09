import React from 'react';
import css from '@components/Odvp/02_MeanWise/Timeline.module.scss';

const Timeline = () => {
    return (
        <div id="timeline" className={css.timeline}>
            <div className={css.timeline__step}>
                <span className={css.timeline__step__number}>1</span>
                <p className={css.timeline__step__bold}>Créer un pot commun</p>
                <p>entre le 4 et le 14 décembre</p>
            </div>
            <div className={css.timeline__step}>
                <span className={`${css.timeline__step__number} ${css.timeline__step__number__middle}`}>2</span>
                <p className={css.timeline__step__bold}>Partager le lien</p>
                <p>du pot à vos amis</p>
            </div>{' '}
            <div className={css.timeline__step}>
                <span className={css.timeline__step__number}>3</span>
                <p className={css.timeline__step__bold}>Collecter un max d&rsquo;argent</p>
                <p>(Si vous gagnez, on doublera la mise)</p>
            </div>
        </div>
    );
};

export default Timeline;
