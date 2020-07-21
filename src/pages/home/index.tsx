import React from 'react';
import css from './index.scss';
import Button from '@components/button';
import { withTranslation } from '@i18n';

const Home = () => {
    return (
        <div className={css.home}>
            home page
            {/* <div>{t('common:test')} </div> */}
            <Button> </Button>
        </div>
    );
};

export default withTranslation()(Home);
