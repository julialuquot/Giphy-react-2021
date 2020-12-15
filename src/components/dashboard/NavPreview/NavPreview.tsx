import React, { useState, useEffect, useContext } from 'react';
import css from './NavPreview.module.scss';
import Link from 'next/link';
import { useTranslation } from '@i18n';
import { useRouter } from 'next/router';
import Button from '@components/common/Button/Button';
import { getRoute, ROUTE } from '@services//http/Route';
import Text from '@components/common/Text/Text';
import ConfirmModification from '@components/common/Modals/ConfirmModification/ConfirmModification';
import ModificationListModal from '@components/common/Modals/ConfirmModal/ConfirmModal';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';

type SvgProps = {
    color: string;
};

type NavPreviewProps = {
    partnerUniq: string;
};

const NavPreview = ({ partnerUniq }: NavPreviewProps) => {
    const { t } = useTranslation('dashboard-header');
    const router = useRouter();

    const informationsContext = useContext(InformationsContext);
    const { getBrand, brand } = informationsContext;

    const [activeTab, setActiveTab] = useState(0);
    const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
    const [openModificationModal, setOpenModificationModal] = useState(false);
    const [modificationList] = useState(' •  Descriptif\n' + ' •  URL site internet\n' + ' •  Produit n3');
    const [isAdminRoute, setIsAdminRoute] = useState(null);

    const onChangeTab = (tab) => {
        setActiveTab(tab);
    };

    const DesktopIcon = ({ color, ...props }: SvgProps) => {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                    fill={color}
                    d="M19 3H5a3 3 0 00-3 3v8a3 3 0 003 3h6v2H7a1 1 0 000 2h10a1 1 0 000-2h-4v-2h6a3 3 0 003-3V6a3 3 0 00-3-3zm1 11a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h14a1 1 0 011 1v8z"
                    fillRule="nonzero"
                />
            </svg>
        );
    };
    const MobileIcon = ({ color, ...props }: SvgProps) => {
        return (
            <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                    fill={color}
                    d="M17 2a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm0 2H7a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1zm-5 11a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0112 15zm2.5-9a1 1 0 010 2h-5a1 1 0 010-2z"
                    fillRule="nonzero"
                />
            </svg>
        );
    };

    const onConfirm = () => {
        setOpenConfirmationModal(false);
    };

    useEffect(() => {
        const asPath = router.asPath;
        const isAdminPath = asPath.includes('admin');
        setIsAdminRoute(isAdminPath);
    }, [router.asPath]);

    useEffect(() => {
        getBrand(partnerUniq);
    }, [getBrand, partnerUniq]);

    return (
        <>
            <ModificationListModal
                isVisible={openModificationModal}
                onHide={() => setOpenModificationModal(false)}
                onConfirm={() => setOpenModificationModal(false)}
                title={t('dashboard-partners:modal-modification.title')}
                text={modificationList}
                confirmLabel={t('dashboard-partners:modal-modification.confirm')}
            />

            <ConfirmModification
                isVisible={openConfirmationModal}
                onHide={() => setOpenConfirmationModal(false)}
                onConfirm={() => onConfirm()}
                title={t('dashboard-partners:modal-modification-confirmation.title')}
                text={t('dashboard-partners:modal-modification-confirmation.text')}
                confirmLabel={t('dashboard-partners:modal-modification-confirmation.confirm')}
                cancelLabel={t('dashboard-partners:modal-modification-confirmation.cancel')}
            />

            <nav className={css.navbar}>
                <div className={css.left}>
                    <Link
                        href={
                            isAdminRoute
                                ? getRoute(ROUTE.DASHBOARD.ADMIN.PARTNERS, null)
                                : getRoute(ROUTE.DASHBOARD.INFORMATIONS, partnerUniq)
                        }
                    >
                        <a className={css.navbar__back}>
                            <img src="/front-static/icons/chevron-left.svg" alt={'go back'} />
                        </a>
                    </Link>

                    <div onClick={() => setOpenModificationModal(true)} className={css.navbar__informations}>
                        <h5>{brand?.name}</h5>
                        <Text color={'ui-secondary'} variant={'caption_00'}>
                            {t('dashboard-header:edit-on')}
                        </Text>
                        {isAdminRoute && <img src="/front-static/icons/help.svg" alt={'help'} />}
                    </div>
                </div>
                <div className={css.navbar__view}>
                    <div
                        className={`${css.navbar__view__icon} ${activeTab === 0 && css.navbar__view__icon__active}`}
                        onClick={() => onChangeTab(0)}
                    >
                        <DesktopIcon color={activeTab === 0 ? '#ffffff' : '#111e3d'} />
                    </div>
                    <div
                        className={`${css.navbar__view__icon} ${activeTab === 1 && css.navbar__view__icon__active}`}
                        onClick={() => onChangeTab(1)}
                    >
                        <MobileIcon color={activeTab === 1 ? '#ffffff' : '#111e3d'} />
                    </div>
                </div>
                <div className={css.navbar__btn}>
                    <Link
                        href={
                            isAdminRoute
                                ? getRoute(ROUTE.DASHBOARD.ADMIN.INFORMATIONS, partnerUniq)
                                : getRoute(ROUTE.DASHBOARD.INFORMATIONS, partnerUniq)
                        }
                    >
                        <a>
                            <Button
                                icon={'/front-static/icons/edit.svg'}
                                margin={'0 8px 0 0'}
                                width={'125px'}
                                variant={'secondary'}
                            >
                                {t('dashboard-header:edit')}
                            </Button>
                        </a>
                    </Link>
                    {isAdminRoute && (
                        <Button onClick={() => setOpenConfirmationModal(true)} width={'125px'} variant={'primary'}>
                            {t('dashboard-header:finalize')}
                        </Button>
                    )}
                </div>
            </nav>
        </>
    );
};

export default NavPreview;
