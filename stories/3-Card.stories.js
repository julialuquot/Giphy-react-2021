import React from 'react';
import Card from '../src/components/common/Card/Card';
import lpc from '../public/front-static/images/lpc.png';

export default {
    title: 'Card',
    component: Card,
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '20px',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        width: '90vw',
        marginBottom: '20px',
    },
};

export const Partner = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Card
                cardImg={lpc}
                cardColor="brand-primary"
                cardTitle="Zalando"
                cardSubtitle="Prêt à porter"
                cardText="Créez un chèque-cadeau Amazon du montant de votre choix utilisable parmi des millions de produits en stock. Livres, jeux vidéos, high-tech, jouets, chaussures, vêtements, sport et plus encore ! sport et plus encore !sport et plus encore !"
            />
        </div>{' '}
    </div>
);
