import React from 'react';
import Link from 'next/link';
import css from '../Authentication.scss';

type LeftSideProps = {
    children: React.ReactNode;
};

const LeftSide: React.FC<LeftSideProps> = ({ children }: LeftSideProps) => {
    return (
        <div className={css.left_side_wrapper}>
            <Link href="/">
                <a href="/" className={css.logo}>
                    <img src="/images/logo.svg" alt="LPC logo" />
                </a>
            </Link>
            {children}
        </div>
    );
};

export default LeftSide;
