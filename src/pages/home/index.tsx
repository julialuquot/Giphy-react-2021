import React from 'react';
import css from './index.scss';
import Button from '@components/common/Button/Button';
import { withTranslation } from '@i18n';

const namespacesRequired = ['common'];

interface HomeProps {
    t: (string) => string;
}

const Home = ({ t }: HomeProps) => {
    return (
        <div className={css.home}>
            <h2>{t('common:test')}</h2>
            <h4>Bon retour de vacances ^-^</h4>
            <ul>
                <li>Jai push tout mon travail sur develop, à savoir entre autre:</li>
                <li>Ajout config sass module dans le dossier assets/styles.</li>
                <li>Ajout exemple pour typescript avec interface.</li>
                <li>
                    Ajout config Storybook, qui permet la création dune librairie UI (tu pourras en parler avec Matt).
                    Pour tester il faut lancer yarn storybook ou npm run storybook. La preview se fait dans le dossier
                    /stories.
                </li>
                <li>
                    Création des premiers composants surtout pour exemple et pour voir la meilleure méthodo ensemble.
                    Les maquettes ne sont pas encore dispo sur zepplin à ce jour.
                </li>{' '}
                <li>Voilà , au plaisir de discuter avec toi de tout ça mardi quand je reviens ! :)</li>
            </ul>

            <Button
                type="button"
                variant="brand-secondary"
                size="large"
                isLoading
                onClick={() => console.log('je click')}
            >
                Work in progress...
            </Button>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Home);
