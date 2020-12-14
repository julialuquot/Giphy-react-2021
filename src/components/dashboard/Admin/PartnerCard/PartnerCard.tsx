import React, { useRef, useState } from 'react';
import css from './PartnerCard.module.scss';
import CardPopUp from '@components/dashboard/Admin/CardPopUp/CardPopUp';
import useOnClickOutside from '@components/common/hooks/useOnClickOutside';
import { useTranslation } from '@i18n';
import { formatDate } from '@services/utils/DateService';
import Text from '@components/common/Text/Text';
import Link from 'next/link';
import { getRoute, ROUTE } from '@services//http/Route';

type PartnerCardProps = {
    logo: string;
    color: string;
    name: string;
    lastModification: string;
    verificationStatus: string;
    verificationResponsible: string;
    onOpenModal: (boolean) => void;
    onSelectPartner: (uniq: string, active: boolean) => void;
    active: boolean;
    uniq: string;
};

const PartnerCard = ({
    logo,
    color,
    name,
    lastModification,
    onOpenModal,
    onSelectPartner,
    verificationResponsible,
    active,
    uniq,
}: PartnerCardProps) => {
    const { t } = useTranslation('dashboard-partners');

    const [isHover, setIsHover] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const cardRef = useRef();
    useOnClickOutside(cardRef, () => setIsPopUpOpen(false));

    const headerStyle = {
        backgroundColor: color || '#121922',
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

    const handleOnSelectPartner = (uniq, active) => {
        onSelectPartner(uniq, active);
    };

    return (
        <div ref={cardRef} className={css.wrapper}>
            <div
                className={`${css.card} ${!active ? css.card__inactive : ''}`}
                onClick={() => handleOnSelectPartner(uniq, active)}
                onMouseEnter={() => onMouseEnter()}
                onMouseLeave={() => onMouseLeave()}
            >
                <div className={css.card__header} style={headerStyle}>
                    <img className={css.card__header__logo} src={logo} alt={name} />
                    <div onClick={() => onToggleProfil()} className={css.card__header__more}>
                        <img
                            className={`${css.card__header__more__icon} ${
                                isHover && css.card__header__more__icon__visible
                            }`}
                            src="/front-static/icons/more-horizontal.svg"
                            alt="more"
                        />
                    </div>
                </div>
                <div className={css.card__footer}>
                    <h5>{name}</h5>
                    <Text variant={'caption_00'} color={'ui-secondary'}>
                        {t('dashboard-partners:card.edit-on')} {formatDate(lastModification)} (
                        {verificationResponsible || 'ND'})
                    </Text>
                    <Link href={getRoute(ROUTE.DASHBOARD.ADMIN.PREVIEW, name)}>
                        <a className={css.card__footer__eye}>
                            <img src="/front-static/icons/show-eye.svg" alt="show" />
                        </a>
                    </Link>
                </div>
            </div>

            <CardPopUp onOpenModal={(value) => onOpenModal(value)} isOpen={isPopUpOpen} active={active} />
        </div>
    );
};

export default PartnerCard;
