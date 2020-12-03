import React from 'react';
import Modal from '@components/common/Modals/Modal/Modal';
import Button from '@components/common/Button/Button';
import css from './ConfirmGoOnLine.module.scss';
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

const ConfirmGoOnLine = ({
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
                <div className={css.modal__toto} />
                <h5>{title}</h5>
                <Text variant={'body_00'} color={'ui-secondary'}>
                    {text}
                </Text>
                <div className={css.modal__btn__container}>
                    {confirmLabel && (
                        <Button
                            margin={'0 0 8px 0'}
                            variant={'primary'}
                            isLoading={isLoading}
                            onClick={() => onConfirm()}
                            customClass={css.modal__btn__container__primary}
                        >
                            {confirmLabel}
                        </Button>
                    )}
                    {cancelLabel && (
                        <Button variant={'secondary'} isLoading={isLoading} onClick={() => onHide()}>
                            {cancelLabel}
                        </Button>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmGoOnLine;
