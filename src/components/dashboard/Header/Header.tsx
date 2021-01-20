import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Avatar from '@components/dashboard/Header/Avatar/Avatar';
import AuthContext from '@components/dashboard/context/auth/AuthContext';
import Profil from '@components/dashboard/Header/Profil/Profil';
import useOnClickOutside from '@components/common/hooks/useOnClickOutside';
import { getRoute, ROUTE } from '@services/http/Route';
import AuthService from '@services/domain/Dashboard/AuthService';
import css from './Header.module.scss';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';

const Header = () => {
    const router = useRouter();
    const avatarRef = useRef();
    useOnClickOutside(avatarRef, () => setIsProfilOpen(false));

    const authContext = useContext(AuthContext);
    const { userSignOut, getUser, user } = authContext;

    const informationsContext = useContext(InformationsContext);
    const { getBrand, brand, isFetching } = informationsContext;

    const [isProfilOpen, setIsProfilOpen] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [merchantInfos, setMerchantInfos] = useState(null);
    const [adminInfos, setAdminInfos] = useState(null);

    const onToggleProfil = () => {
        setIsProfilOpen(!isProfilOpen);
    };

    const onSignOut = async () => {
        await userSignOut();
        await router.push(getRoute(ROUTE.DASHBOARD.SIGN_IN, null));
    };

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        user && setUserRole(AuthService.getUserRole(user));
    }, [user]);

    useEffect(() => {
        if (user && userRole === 'ADMIN') {
            const adminName = user?.email;
            const adminInitial = adminName.charAt(0).toUpperCase();
            const values = {
                name: adminName,
                initial: adminInitial,
                color: '#E22B76',
            };
            return setAdminInfos(values);
        }
    }, [user, userRole]);

    useEffect(() => {
        if (user && userRole === 'MERCHANT') {
            getBrand(user.partnerUniq);
            const merchantName = brand?.name ? brand.name : user?.email;
            const merchantInitial = merchantName ? merchantName.charAt(0).toUpperCase() : '';
            const merchantColor = brand?.color ? brand.color : '#E22B76';
            const values = {
                name: merchantName,
                initial: merchantInitial,
                color: merchantColor,
                brand: brand?.brand,
            };
            return setMerchantInfos(values);
        }
    }, [brand?.brand, brand.color, brand?.name, getBrand, user, userRole]);

    return (
        <nav className={css.navbar}>
            <div className={css.navbar__left}>
                <img className={css.navbar__logo} src="/front-static/icons/logo-lpc.svg" alt={'logo lpc'} />
            </div>
            {!isFetching && (merchantInfos?.initial || adminInfos?.initial) && (
                <div ref={avatarRef}>
                    <Avatar
                        onToggleProfil={() => onToggleProfil()}
                        initial={merchantInfos?.initial || adminInfos?.initial}
                        name={merchantInfos?.name || adminInfos?.name}
                        color={merchantInfos?.color || adminInfos?.color}
                        height={'38px'}
                        width={'38px'}
                    />
                    <Profil
                        onSignOut={() => onSignOut()}
                        isOpen={isProfilOpen}
                        initial={merchantInfos?.initial || adminInfos?.initial}
                        name={merchantInfos?.name || adminInfos?.name}
                        color={merchantInfos?.color || adminInfos?.color}
                    />
                </div>
            )}
        </nav>
    );
};
export default Header;
