import React, { useEffect, useState } from 'react';
import { Formik, Form, useFormikContext } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import css from './AuthenticationCode.scss';
import Text from '@components/common/Text/Text';
import { withTranslation } from '@i18n';

const SUBMISSION_STATE = {
    LOADING: 'LOADING',
    SUCCESS: 'SUCCES',
    FAILURE: 'FAILURE',
};

const AutoSubmitToken = () => {
    // Grab values and submitForm from context
    const { values, submitForm } = useFormikContext();
    React.useEffect(() => {
        // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
        const submit = !Object.entries(values).find((e) => e[1] === '');
        if (submit) {
            submitForm();
        }
    }, [values, submitForm]);
    return null;
};

type FeedBackPropsType = {
    submissionState: 'LOADING' | 'SUCCESS' | 'FAILURE';
    t: Function;
};

const FeedBack: React.FC<FeedBackPropsType> = ({ submissionState, t }: FeedBackPropsType) => {
    return (
        <div
            style={{ visibility: submissionState === null ? 'hidden' : 'visible' }}
            className={`${css.feedback} ${submissionState === SUBMISSION_STATE.SUCCESS && css.feedback_success} ${
                submissionState === SUBMISSION_STATE.FAILURE && css.feedback_failure
            }`}
        >
            {submissionState === SUBMISSION_STATE.LOADING && <img src="/front-static/icons/spinner.svg" />}
            {submissionState === SUBMISSION_STATE.SUCCESS && (
                <Text variant="hint" color="ui-success">
                    {t('authentication:login-confirmation.submission-success')}{' '}
                </Text>
            )}
            {submissionState === SUBMISSION_STATE.FAILURE && (
                <Text variant="hint" color="ui-error">
                    {t('authentication:login-confirmation.submission-failure')}{' '}
                </Text>
            )}
        </div>
    );
};

type AuthenticationCode = {
    t: (string) => string;
};
const AuthenticationCode: React.FC<AuthenticationCode> = ({ t }: AuthenticationCode) => {
    const disabledTabInit = [false, true, true, true, true, true];
    const formInitValues = {
        number_0: '',
        number_1: '',
        number_2: '',
        number_3: '',
        number_4: '',
        number_5: '',
    };
    const [disabledTab, setDisabledTab] = useState(disabledTabInit);
    const [listenerAdded, setListenerAdded] = useState(false);
    const [submissionState, setSubmissionState] = useState(null);

    useEffect(() => {
        if (!listenerAdded) {
            setListenerAdded(true);
            setTimeout(() => {
                Array.from(Array(6).keys()).forEach((i) => {
                    setInputFilter(document.getElementById(`number_${i}`), (value) => {
                        return /^\d*$/.test(value) && (value === '' || parseInt(value) <= 9);
                    });
                });
            }, 200);
        }
    });
    const setInputFilter = (textbox, inputFilter) => {
        ['input', 'keydown', 'keyup', 'mousedown', 'mouseup', 'select', 'contextmenu', 'drop'].forEach(function (
            event,
        ) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else {
                    this.value = '';
                }
                if (event === 'keyup' && this.value !== '' && !disabledTab[parseInt(this.id.split('_')[1])]) {
                    const tab = disabledTab;
                    const nextInputId = parseInt(this.id.split('_')[1]) + 1;

                    if (nextInputId === 1) {
                        setSubmissionState(null);
                    }
                    if (nextInputId <= 5) {
                        tab[nextInputId] = false;
                        setDisabledTab([...tab]);
                        document.getElementById(`number_${nextInputId}`).focus();
                    }
                }
            });
        });
    };

    return (
        <Formik
            initialValues={formInitValues}
            render={() => {
                return (
                    <Form id="codeForm">
                        <div className={css.wrapper}>
                            {Array.from(Array(6).keys()).map((i) => (
                                <Input
                                    disabled={disabledTab[i]}
                                    customStyle="authentication-code"
                                    type="text"
                                    name={`number_${i}`}
                                    id={`number_${i}`}
                                    key={`number_${i}`}
                                />
                            ))}
                        </div>
                        <AutoSubmitToken />
                        <FeedBack submissionState={submissionState} t={t} />
                    </Form>
                );
            }}
            onSubmit={(values, formikBag) => {
                const code = Object.entries(values).reduce((acc, current) => (acc += current[1]), '');
                setSubmissionState(SUBMISSION_STATE.LOADING);
                setTimeout(() => {
                    if (code === '111111') {
                        setSubmissionState(SUBMISSION_STATE.SUCCESS);
                    } else {
                        setSubmissionState(SUBMISSION_STATE.FAILURE);
                        Object.entries(formInitValues).forEach((elem) => formikBag.setFieldValue(elem[0], elem[1]));
                        setDisabledTab([...disabledTabInit]);
                    }
                }, 2000);
            }}
        />
    );
};

export default withTranslation('authentication')(AuthenticationCode);
