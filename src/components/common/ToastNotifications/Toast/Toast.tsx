import React from 'react';
import { DefaultToast } from 'react-toast-notifications';
import css from './Toast.module.scss';

type ToastProps = { children: React.ReactNode; appearance: string };

const Toast = ({ children, ...props }: ToastProps) => {
    return (
        <DefaultToast {...props} className={`${css.toast} ${css['toast__' + props.appearance]}`}>
            {children}
        </DefaultToast>
    );
};

export default Toast;
