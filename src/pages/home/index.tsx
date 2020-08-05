import React from 'react';
import css from './index.scss';
import Button from '@components/common/Button/Button';
import { withTranslation } from '@i18n';
import Avatar from '@components/common/Avatar/Avatar';

interface HomeProps {
    t: (string) => string;
}

const Home = ({ t }: HomeProps) => {
    return (
        <div className={css.home}>
            <Avatar imageSrc={'images/no-avatar.png'} />
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
