import React, { useContext, useEffect, useState } from 'react';
import css from './Header.module.scss';
import Avatar from '@components/dashboard/Navbar/Avatar';
import AuthContext from '@components/dashboard/context/auth/AuthContext';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import Profil from '@components/dashboard/Navbar/Profil';

const Header = () => {
    const authContext = useContext(AuthContext);
    const { user, userSignOut } = authContext;

    const informationsContext = useContext(InformationsContext);
    const { getBrand, brand, isFetching } = informationsContext;

    const [isProfilOpen, setIsProfilOpen] = useState(false);

    useEffect(() => {
        user && getBrand(user.merchantUniq);
    }, []);

    const getInitial = () => {
        if (brand && brand.name && brand.name !== '') {
            return brand.name.charAt(0).toUpperCase();
        }
        if (user && user.firstName) {
            return user && user.firstName.charAt(0).toUpperCase();
        }
        return '';
    };

    const getColor = () => {
        if (brand && brand.color !== '') {
            return brand.color;
        }
        return '#E22B76';
    };

    const getName = () => {
        if (brand && brand.name !== '') {
            return brand.name;
        }
        if (user && user.email) {
            return user.email;
        }
        return '';
    };

    const onToggleProfil = () => {
        setIsProfilOpen(!isProfilOpen);
    };

    const onSignOut = () => {
        userSignOut();
    };

    return (
        <nav className={css.navbar}>
            <div className={css.navbar__left}>
                <img className={css.navbar__logo} src="/icons/logo-lpc.svg" alt={'logo lpc'} />
            </div>
            {!isFetching && user && (
                <div>
                    <Avatar
                        onToggleProfil={() => onToggleProfil()}
                        initial={getInitial()}
                        name={getName()}
                        height={'38px'}
                        width={'38px'}
                        color={getColor()}
                    />
                    <Profil
                        onSignOut={() => onSignOut()}
                        isOpen={isProfilOpen}
                        initial={getInitial()}
                        name={getName()}
                        color={getColor()}
                    />{' '}
                </div>
            )}
        </nav>
    );
};

export default Header;
