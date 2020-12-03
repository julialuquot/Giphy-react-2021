import React from 'react';
import Modal from '@components/common/Modals/Modal/Modal';
import Button from '@components/common/Button/Button';
import css from './ConfirmModification.module.scss';
import Text from '@components/common/Text/Text';

type ConfirmModalProps = {
    mainTitle?: string;
    title: string;
    text: string;
    isVisible: boolean;
    confirmLabel?: string;
    cancelLabel?: string;
    isLoading?: boolean;
    onHide: () => void;
    onConfirm: () => void;
};

const ConfirmModification = ({
    isVisible,
    title,
    text,
    confirmLabel,
    cancelLabel,
    onHide,
    onConfirm,
    isLoading,
}: ConfirmModalProps) => {
    return (
        <Modal visible={isVisible} onHide={onHide} customClass={css.custom}>
            <div className={css.modal}>
                <h5>{title}</h5>
                <Text variant={'body_00'} color={'ui-secondary'}>
                    {text}
                </Text>

                <div className={css.modal__input}></div>

                <div className={css.modal__btn__container}>
                    {cancelLabel && (
                        <Button variant={'secondary'} isLoading={isLoading} onClick={() => onHide()} width={'95px'}>
                            {cancelLabel}
                        </Button>
                    )}
                    {confirmLabel && (
                        <Button
                            margin={'0 0 0 8px'}
                            variant={'primary'}
                            isLoading={isLoading}
                            onClick={() => onConfirm()}
                            customClass={css.modal__btn__container__primary}
                            width={'95px'}
                        >
                            {confirmLabel}
                        </Button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmModification;
