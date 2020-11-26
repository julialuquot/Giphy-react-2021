import React from 'react';
import TermsHeader from './components/TermsHeader/TermsHeader';
import TermsArticles from './components/TermsContent/TermsArticles';
import css from './Terms.module.scss';

const Terms = () => {
    return (
        <div className={css.wrapper}>
            <TermsHeader />
            <TermsArticles />
        </div>
    );
};

export default Terms;
