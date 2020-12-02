import React from 'react';
import AwesomeModal from 'react-responsive-modal';
import css from './Modal.module.scss';

type ModalProps = {
    visible: boolean;
    onHide: () => void;
    children: React.ReactNode;
    mainTitle?: string;
    titleCustomClass?: string;
    hideCloseButton?: boolean;
    customClass?: string;
    customOverlay?: string;
};

const Modal = ({
    visible,
    onHide,
    children,
    mainTitle,
    titleCustomClass,
    customClass,
    hideCloseButton,
    customOverlay,
}: ModalProps) => {
    return (
        <AwesomeModal
            center
            classNames={{
                overlay: css.modal__overlay + '' + customOverlay ? customOverlay : '',
                modal: css.modal + ' ' + customClass,
                transitionEnter: css.modal__transition_enter,
                transitionEnterActive: css.modal__transition_enter_active,
                transitionExit: css.modal__transition_exit,
                transitionExitActive: css.modal__transition_exit_active,
            }}
            showCloseIcon={false}
            open={visible}
            onClose={() => onHide()}
        >
            <div className={css.modal__content_wrapper}>
                {!hideCloseButton && (
                    <span onClick={() => onHide()} className={css.modal__close_button}>
                        <img src="/icons/navigation-close.svg" alt="close" />
                    </span>
                )}
                {mainTitle && (
                    <h3
                        className={titleCustomClass && titleCustomClass}
                        dangerouslySetInnerHTML={{ __html: mainTitle }}
                    />
                )}
                {children}
            </div>
        </AwesomeModal>
    );
};

export default Modal;
