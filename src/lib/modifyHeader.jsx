import React from 'react';
import { Helmet } from 'react-helmet';

export default function ModifyHeader({ titleSuffix, pageTitle }) {
    return (
        <Helmet>
            <title>{pageTitle} {titleSuffix}</title>
            <meta name="description" content={`AAB Pet Services - ${pageTitle}`} />
            <meta name="keywords" content="pet services, dog walking, pet sitting, pet care" />
            <meta name="author" content="AAB Pet Services" />
        </Helmet>
    );
}