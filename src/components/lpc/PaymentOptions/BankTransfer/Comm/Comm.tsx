import React from 'react';
import css from './Comm.module.scss';
import Text from '@components/common/Text/Text';
import Heading from '@components/common/Heading/Heading';

type CommProps = {
    articles: { title: string; desc: string; imgSrc: string }[];
    title: string;
    subtitle: string;
};

const Comm = ({ articles, title, subtitle }: CommProps) => {
    return (
        <div className={css.comm}>
            <Heading title={title} subtitle={subtitle} inverseColor />
            {articles.map((article) => {
                return (
                    <div className={css.comm__articles} key={article.title}>
                        <img src={article.imgSrc} alt={article.title} />
                        <h4>{article.title}</h4>
                        <Text variant={'body_00'} color={'txt-primary'}>
                            {article.desc}
                        </Text>
                    </div>
                );
            })}
        </div>
    );
};

export default Comm;
