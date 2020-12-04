import React from 'react';
import css from './index.module.scss';
import { withTranslation } from '@i18n';
import Odvp from '@components/lpc/Odvp/Odvp';
import Head from 'next/head';

const namespacesRequired = ['home-page'];

const OdvpPage = () => {
    return (
        <>
            <Head>
                <title>On double votre pot 2020</title>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '635948429875488');
      fbq('track', 'PageView');`,
                    }}
                />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=635948429875488&ev=PageView&noscript=1" />`,
                    }}
                />
            </Head>

            <div className={css.odvp}>
                <Odvp />
            </div>
        </>
    );
};

export default withTranslation(namespacesRequired)(OdvpPage);
