import React from 'react';
import { useTranslation } from '@i18n';
import css from './TermsArticles.module.scss';

const TermsArticles = () => {
    const { t } = useTranslation('terms');

    return (
        <>
            {t('terms:articles', {
                returnObjects: true,
            }).map((article) => {
                return (
                    <div className={css.article} key={article.id}>
                        <h5>{article.title}</h5>
                        <p dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                );
            })}
        </>
    );
};

export default TermsArticles;
