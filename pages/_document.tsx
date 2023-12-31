import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        content="ikigai v.33 powered by Art Blocks Engine"
                        name="ikigai v33"
                    />
                    <meta
                        content="ikigai v.33 powered by Art Blocks Engine"
                        property="og:title"
                    />
                    <meta
                        content="ikigai v.33 powered by Art Blocks Engine"
                        property="og:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    />
                    <meta
                        property="og:url"
                        content="https://livethelife.tv"
                    />
                    <meta
                        property="og:site_name"
                        content="ikigai v.33 powered by Art Blocks Engine"
                    />
                    <meta
                        content="ikigai v.33 powered by Art Blocks Engine"
                        property="twitter:title"
                    />
                    <meta
                        content="ikigai v.33 powered by Art Blocks Engine"
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@livethelifetv" />
                    <meta name="twitter:creator" content="@livethelifetv" />
                    <meta property="fb:admins" content="132951670226590" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="theme-color" content="#000000" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="app">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
