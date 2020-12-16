import React, { useState } from 'react';
import css from './Informations.module.scss';
import SideNavigation from '@components/dashboard/Informations/SideNavigation/SideNavigation';
import Tutorial from '@components/dashboard/Informations/Section-tutorial/Tutorial/Tutorial';
import Products from '@components/dashboard/Informations/Section-products/Products/Products';
import BrandContainer from '@components/dashboard/Informations/Section-brand/BrandContainer/BrandContainer';

type InformationsProps = {
    partnerUniq: string;
};

const Informations = ({ partnerUniq }: InformationsProps) => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className={css.informations}>
            <SideNavigation partnerUniq={partnerUniq} onStepChange={(step) => setActiveStep(step)} />
            {activeStep === 0 && <BrandContainer partnerUniq={partnerUniq} />}
            {activeStep === 1 && <Tutorial partnerUniq={partnerUniq} />}
            {activeStep === 2 && <Products partnerUniq={partnerUniq} />}
        </div>
    );
};

export default Informations;
