import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Button = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default Button;
