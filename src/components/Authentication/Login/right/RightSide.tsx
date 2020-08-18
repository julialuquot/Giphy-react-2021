import React from 'react';
import css from '../Login.scss';

type RightSideProps = {
    children: React.ReactNode;
};

const RightSide: React.FC<RightSideProps> = ({ children }: RightSideProps) => {
    return <div className={css.right_side_wrapper}>{children}</div>;
};

export default RightSide;
