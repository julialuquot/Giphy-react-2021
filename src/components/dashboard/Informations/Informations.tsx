import React, { useState } from 'react';
import css from './Informations.module.scss';
import Brand from '@components/dashboard/Informations/Brand/Brand';
import SideNavigation from '@components/dashboard/Informations/SideNavigation/SideNavigation';
import Tutorial from '@components/dashboard/Informations/Tutorial/Tutorial';
import Products from '@components/dashboard/Informations/Products/Products';

const Informations = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className={css.informations}>
            <SideNavigation onStepChange={(step) => setActiveStep(step)} />
            {activeStep === 0 && <Brand />}
            {activeStep === 1 && <Tutorial />}
            {activeStep === 2 && <Products />}
        </div>
    );
};

export default Informations;
