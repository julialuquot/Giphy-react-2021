import React from 'react';
import { Form, Formik } from 'formik';
import SecondaryHeading from '@components/common/Heading/SecondaryHeading/SecondaryHeading';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import Input from '@components/common/Formik/FormikInputField';
import css from './GiftCard.module.scss';

type OnLineProps = {
    title: string;
    subtitle: string;
    paragraph: string;
    cta: string;
    terms: string;
    brandLogo?: string;
    brandColor?: string;
    inputPlaceholder: string;
};

const GiftCard = ({ title, subtitle, paragraph, cta, terms, brandLogo, brandColor, inputPlaceholder }: OnLineProps) => {
    const cardStyle = {
        backgroundImage: `url(${brandLogo})`,
        backgroundColor: brandColor || '',
    };

    const getInitialValues = () => {
        return {
            amount: '',
        };
    };

    const onSubmit = async () => {
        // TODO connect to WS and add schema
    };

    const renderForm = () => {
        return (
            <Form className={css.form}>
                <div className={css.form__input}>
                    <Input name="amount" type="text" placeholder={inputPlaceholder} />
                </div>
                <Button customClass={css.form__cta} variant="primary" size="small" type="submit">
                    {cta}
                </Button>
            </Form>
        );
    };

    return (
        <div className={css.online}>
            <SecondaryHeading title={title} subtitle={subtitle} paragraph={paragraph} />
            <div className={css.online__content}>
                <div className={css.online__content__card} style={cardStyle} />
            </div>
            <Formik initialValues={getInitialValues()} onSubmit={() => onSubmit()}>
                {() => renderForm()}
            </Formik>
            <Text variant={'footer'} color={'txt-secondary'}>
                {terms}
            </Text>
        </div>
    );
};

export default GiftCard;
