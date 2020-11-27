import React, { useContext, useState } from 'react';
import css from './Informations.module.scss';
import Brand from '@components/dashboard/Informations/Brand/Brand';
import SideNavigation from '@components/dashboard/Informations/SideNavigation/SideNavigation';
import Tutorial from '@components/dashboard/Informations/Tutorial/Tutorial';
import Products from '@components/dashboard/Informations/Products/Products';
import AuthContext from '@components/dashboard/context/auth/AuthContext';

const Informations = () => {
    const [activeStep, setActiveStep] = useState(0);

    const authContext = useContext(AuthContext);
    const { user } = authContext;

    return (
        <div className={css.informations}>
            <SideNavigation onStepChange={(step) => setActiveStep(step)} />
            {activeStep === 0 && <Brand user={user} />}
            {activeStep === 1 && <Tutorial />}
            {activeStep === 2 && <Products />}
        </div>
    );
};

export default Informations;
