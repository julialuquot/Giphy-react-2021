import React from 'react';
import { DefaultToastContainer } from 'react-toast-notifications';
import css from './ToastContainer.module.scss';

type ToastContainerProps = { children: React.ReactNode };

const ToastContainer = ({ children, ...props }: ToastContainerProps) => {
    return (
        <DefaultToastContainer {...props} className={css.toast_container}>
            {children}
        </DefaultToastContainer>
    );
};

export default ToastContainer;
