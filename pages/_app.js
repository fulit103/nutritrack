import "@styles/globals.scss";
import { GoogleTagManager } from '@next/third-parties/google';

export default function App({ Component, pageProps }) {
    return <>
        <Component {...pageProps} />
        <GoogleTagManager gtmId="GTM-N2K4W69"/>
    </>;
}
