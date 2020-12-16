import React, { useState } from 'react';
import css from './Documents.module.scss';
import { useTranslation } from '@i18n';
import Button from '@components/common/Button/Button';
import AddPdf from '@components/dashboard/Admin/AddPdf/AddPdf';

type DocumentsProps = {
    files: { id: number; title: string }[];
    userRole: string;
};

const Documents = ({ files, userRole }: DocumentsProps) => {
    const { t } = useTranslation('dashboard-stats');

    const [start, setStart] = useState(0);
    const [numberToDisplay, setNumberToDisplay] = useState(4);

    const onDownload = () => {};

    const onLoadNext = () => {
        setStart(start + 4);
        setNumberToDisplay(numberToDisplay + 4);
    };

    const onLoadPrevious = () => {
        setStart(start - 4);
        setNumberToDisplay(numberToDisplay - 4);
    };

    const renderFiles = () => {
        return files.slice(start, numberToDisplay).map((file) => (
            <div key={file.id} onClick={() => onDownload()} className={css.documents__download}>
                <p>{file.title}</p>
                <img src="/front-static/icons/download.svg" alt="download" />
            </div>
        ));
    };

    return (
        <div className={css.documents}>
            <h3>{t('dashboard-stats:documents.title')}</h3>
            <p className={css.documents__desc}>{t('dashboard-stats:documents.desc')}</p>

            {userRole === 'ADMIN' && <AddPdf />}

            {renderFiles()}

            <div className={css.documents__btn__container}>
                {start !== 0 && (
                    <Button
                        onClick={() => onLoadPrevious()}
                        width={'177px'}
                        height={'38px'}
                        margin={'8px 4px 0 0'}
                        variant={'secondary'}
                        customClass={css.documents__btn__container__custom}
                    >
                        {t('dashboard-stats:btn.load-previous')}
                    </Button>
                )}

                {start !== files.length - 4 && (
                    <Button
                        onClick={() => onLoadNext()}
                        width={'177px'}
                        height={'38px'}
                        margin={'8px 0 0 4px'}
                        variant={'secondary'}
                        customClass={css.documents__btn__container__custom}
                    >
                        {t('dashboard-stats:btn.load-next')}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default Documents;
