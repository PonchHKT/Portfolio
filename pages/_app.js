import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Ponch - Portfolio</title>
                <meta name="description" content="Bienvenue sur mon Portfolio !" />
                <meta name="keywords" content="ponch, pornchai, pornchai chanaloet, shux, shuxdev, ponchhkt, " />
                <meta property="og:image" content="https://shuxdev.vercel.app/img/Capture.PNG" />
                <meta name="twitter:image" content="https://shuxdev.vercel.app/img/Capture.PNG" />
                <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="800" />
                <link rel="icon" href="./img/Capture.PNG" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
