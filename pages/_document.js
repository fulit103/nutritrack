import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google';

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <GoogleTagManager gtmId="GTM-N2K4W69"/>
            <Head />
            <body>
                <Main />
                <NextScript />                
            </body>
        </Html>
    );
}
