import React, { useContext, useEffect, useRef, useState } from 'react';
import css from './Header.module.scss';
import Avatar from '@components/dashboard/Header/Avatar/Avatar';
import AuthContext from '@components/dashboard/context/auth/AuthContext';
import Profil from '@components/dashboard/Header/Profil/Profil';
import useOnClickOutside from '@components/common/hooks/useOnClickOutside';
import { getRoute, ROUTE } from '@services/http/Route';
import { useRouter } from 'next/router';
import InformationsService from '@services/domain/InformationsService';

const Header = () => {
    const router = useRouter();
    const [brand, setBrand] = useState(null);

    const authContext = useContext(AuthContext);
    const { userSignOut, isFetching, getUser, user } = authContext;

    const [isProfilOpen, setIsProfilOpen] = useState(false);

    const avatarRef = useRef();
    useOnClickOutside(avatarRef, () => setIsProfilOpen(false));

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        user && InformationsService.getBrand(user.partnerUniq).then((res) => setBrand(res.data));
    }, [user]);

    const onSignOut = async () => {
        await userSignOut();
        await router.push(getRoute(ROUTE.DASHBOARD.SIGN_IN, null));
    };

    const getInitial = () => {
        if (user && brand && brand.name && brand.name !== '') {
            return brand.name.charAt(0).toUpperCase();
        }

        return '';
    };

    const getColor = () => {
        if (user && brand && brand.color && brand.color !== '') {
            return brand.color;
        }
    };

    const getName = () => {
        if (brand && brand.name !== '') {
            return brand.name;
        }
        if (user && user.email) {
            return user.email;
        }
    };

    const onToggleProfil = () => {
        setIsProfilOpen(!isProfilOpen);
    };

    return (
        <nav className={css.navbar}>
            <div className={css.navbar__left}>
                <img className={css.navbar__logo} src="/front-static/icons/logo-lpc.svg" alt={'logo lpc'} />
            </div>
            {!isFetching && user && (
                <div ref={avatarRef}>
                    <Avatar
                        onToggleProfil={() => onToggleProfil()}
                        initial={getInitial()}
                        name={getName()}
                        color={getColor()}
                        height={'38px'}
                        width={'38px'}
                    />
                    <Profil
                        onSignOut={() => onSignOut()}
                        isOpen={isProfilOpen}
                        initial={getInitial()}
                        name={getName()}
                        color={getColor()}
                    />
                </div>
            )}
        </nav>
    );
};

export default Header;