import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Ponch - Portfolio</title>
                <meta name="description" content="Bienvenue sur mon Portfolio !" />
                <meta name="keywords" content="ponch, pornchai, pornchai chanaloet, shux, shuxdev, ponchhkt, " />
                <meta property="og:image" content="%PUBLIC_URL%/img/Capture.PNG" />
                <meta name="twitter:image" content="%PUBLIC_URL%/img/Capture.PNG" />
                <link rel="icon" href="./img/Capture.PNG" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
