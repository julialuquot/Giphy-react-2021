import React from 'react';
import css from './index.scss';
import Button from '@components/Button/Button';
import { withTranslation } from '@i18n';

interface HomeProps {
    t: (string) => string;
}

const Home = ({ t }: HomeProps) => {
    return (
        <div className={css.home}>
            home page
            <div>{t('common:test')} </div>
            <Button>Hello word </Button>
            <div>hello</div>
        </div>
    );
};

export default withTranslation()(Home);
