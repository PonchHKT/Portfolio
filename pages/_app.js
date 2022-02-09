import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Ponch - Portfolio</title>
                <meta name="description" content="Bienvenue sur mon Portfolio !" />
                <meta name="keywords" content="ponch, pornchai, pornchai chanaloet, shux, shuxdev, ponchhkt, " />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
