import React, { useState } from 'react';
import Modal from '@components/common/Modals/Modal/Modal';
import Button from '@components/common/Button/Button';
import css from './ConfirmModification.module.scss';
import Text from '@components/common/Text/Text';
import { useTranslation } from '@i18n';
import { Form, Formik } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import { confirmModificationSchema } from '@validations/user';

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
    const { t } = useTranslation('dashboard-partners');

    const getInitialValues = () => {
        return {
            message: '',
            email: '',
        };
    };

    const [radio, setRadio] = useState('yes');

    const onChangeRadioValue = (e) => {
        setRadio(e.target.value);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onSubmit = async (values) => {
        // TODO connect to WS
        onHide();
    };

    const onCancel = () => {
        onHide();
        setRadio('yes');
    };

    const renderForm = () => {
        return (
            <Form className={css.modal__form}>
                <div onChange={(e) => onChangeRadioValue(e)}>
                    <label className={css.modal__form__radio}>
                        <input type="radio" value="yes" name="gender" checked={radio === 'yes'} />
                        {t('dashboard-partners:modal-modification-confirmation.yes')}
                    </label>
                    <label className={css.modal__form__radio}>
                        <input type="radio" value="no" name="gender" checked={radio === 'no'} />
                        {t('dashboard-partners:modal-modification-confirmation.no')}
                    </label>
                </div>

                {radio === 'no' && (
                    <>
                        <div className={css.modal__form__input}>
                            <Input
                                name="message"
                                type="textarea"
                                label={t('dashboard-partners:modal-modification-confirmation.message-label')}
                                placeholder={t(
                                    'dashboard-partners:modal-modification-confirmation.message-placeholder',
                                )}
                            />
                        </div>
                        <div className={css.modal__form__input}>
                            <Input
                                name="email"
                                type="text"
                                label={t('dashboard-partners:modal-modification-confirmation.email-label')}
                                placeholder={t('dashboard-partners:modal-modification-confirmation.email-placeholder')}
                            />
                        </div>
                    </>
                )}

                <div className={css.modal__btn__container}>
                    <Button variant={'secondary'} isLoading={isLoading} onClick={() => onCancel()} width={'95px'}>
                        {cancelLabel}
                    </Button>

                    <Button
                        type={'submit'}
                        margin={'0 0 0 8px'}
                        variant={'primary'}
                        isLoading={isLoading}
                        onClick={() => onConfirm()}
                        customClass={css.modal__btn__container__primary}
                        width={'95px'}
                    >
                        {confirmLabel}
                    </Button>
                </div>
            </Form>
        );
    };

    return (
        <Modal visible={isVisible} onHide={onHide} customClass={css.custom}>
            <div className={css.modal}>
                <h5>{title}</h5>
                <Text variant={'body_00'} color={'ui-secondary'}>
                    {text}
                </Text>

                <Formik
                    validationSchema={confirmModificationSchema}
                    initialValues={getInitialValues()}
                    onSubmit={(values) => onSubmit(values)}
                >
                    {() => renderForm()}
                </Formik>
            </div>
        </Modal>
    );
};

export default ConfirmModification;
