import React from 'react';
import Default from '../layouts/default';

export default function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || (page => <Default>{page}</Default>);

    return getLayout(<Component {...pageProps} />);
}
