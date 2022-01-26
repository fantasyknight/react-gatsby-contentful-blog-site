import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from '@/components/SEO';
import '@/assets/styles/index.scss';

type MetaObj = {
  name: string;
  content: string;
};

interface IMarketingLayoutProps {
  title: string;
  description: string;
  meta?: Array<MetaObj>;
  lang?: string;
  children: React.ReactNode | Array<React.ReactNode>;
}

function MarketingLayout({
  title,
  description,
  meta,
  lang,
  children,
}: IMarketingLayoutProps) {
  return (
    <div className="page-wrapper">
      <SEO description={description} title={title} lang={lang} meta={meta} />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        />
      </Helmet>
      {children}
    </div>
  );
}

export default MarketingLayout;
