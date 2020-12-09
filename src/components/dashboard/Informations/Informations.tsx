import React, { useState } from 'react';
import css from './Informations.module.scss';
import SideNavigation from '@components/dashboard/Informations/SideNavigation/SideNavigation';
import Tutorial from '@components/dashboard/Informations/Tutorial/Tutorial';
import Products from '@components/dashboard/Informations/Products/Products';
import BrandContainer from '@components/dashboard/Informations/BrandContainer/BrandContainer';

type InformationsProps = {
    principal: any;
};

const Informations = ({ principal }: InformationsProps) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className={css.informations}>
            <SideNavigation user={principal} onStepChange={(step) => setActiveStep(step)} />
            {activeStep === 0 && <BrandContainer user={principal} />}
            {activeStep === 1 && <Tutorial user={principal} />}
            {activeStep === 2 && <Products user={principal} />}
        </div>
    );
};

export default Informations;
