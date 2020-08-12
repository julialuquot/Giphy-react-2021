import React from 'react';
import css from './index.scss';
import { withTranslation } from '@i18n';
import Card from '@components/common/Card/Card';

const namespacesRequired = ['common'];

interface HomeProps {
    t: (string) => string;
}

const Home = ({ t }: HomeProps) => {
    return (
        <div className={css.home}>
            <p>{t('common:test')}</p>
            <Card
                cardImg={'images/lpc.png'}
                cardColor="brand-primary"
                cardTitle="Zalando"
                cardSubtitle="Prêt à porter"
                cardText="Créez un chèque-cadeau Amazon du montant de votre choix utilisable parmi des millions de produits en stock. Livres, jeux vidéos, high-tech, jouets, chaussures, vêtements, sport et plus encore ! sport et plus encore !sport et plus encore !"
            />
        </div>
    );
};
export default withTranslation(namespacesRequired)(Home);
