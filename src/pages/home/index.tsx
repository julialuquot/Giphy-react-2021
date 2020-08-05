import React from 'react';
import css from './index.scss';
import Button from '@components/common/Button/Button';
import { withTranslation } from '@i18n';

interface HomeProps {
    t: (string) => string;
}

const Home = ({ t }: HomeProps) => {
    return (
        <div className={css.home}>
            <h1>Titre H1</h1>
            <h2>Titre H2</h2>
            <h3>Titre H3</h3>
            <h4>Titre H4</h4>
            home page
            <div>{t('common:test')} </div>
            <Button type="button" variant="primary" size="medium" onClick={() => console.log('je click')}>
                Hello word11
            </Button>
            <Button type="button" variant="secondary" size="medium" isLoading onClick={() => console.log('je click')}>
                Hello word
            </Button>
            <div>hello</div>
        </div>
    );
};

export default withTranslation()(Home);
