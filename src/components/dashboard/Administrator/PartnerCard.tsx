import React, { useRef, useState } from 'react';
import css from './PartnerCard.module.scss';
import CardPopUp from '@components/dashboard/Administrator/CardPopUp';
import useOnClickOutside from '@components/common/hooks/useOnClickOutside';

type PartnerCardProps = {
    cardImg: string;
    cardColor: string;
    cardTitle: string;
    cardSubtitle: string;
};

const PartnerCard = ({ cardImg, cardColor, cardTitle, cardSubtitle }: PartnerCardProps) => {
    const [isHover, setIsHover] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const cardRef = useRef();
    useOnClickOutside(cardRef, () => setIsPopUpOpen(false));

    const headerStyle = {
        backgroundColor: cardColor,
    };

    const onMouseEnter = () => {
        setIsHover(true);
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    const onToggleProfil = () => {
        setIsPopUpOpen(!isPopUpOpen);
    };

    return (
        <div ref={cardRef} className={css.wrapper}>
            <div className={css.card} onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
                <div className={css.card__header} style={headerStyle}>
                    <img className={css.card__header__img} src={cardImg} alt={cardTitle} />
                    <div onClick={() => onToggleProfil()} className={css.card__header__more}>
                        <img
                            className={`${css.card__header__more__icon} ${
                                isHover && css.card__header__more__icon__visible
                            }`}
                            src="/icons/more-horizontal.svg"
                            alt="more"
                        />
                    </div>
                </div>
                <div className={css.card__footer}>
                    <h5>{cardTitle}</h5>
                    <p>Modifié le {cardSubtitle}</p>
                    <div className={css.card__footer__eye}>
                        <img src="/icons/show-eye.svg" alt="show" />
                    </div>
                </div>
            </div>

            <CardPopUp isOpen={isPopUpOpen} isActive={true} />
        </div>
    );
};

export default PartnerCard;
