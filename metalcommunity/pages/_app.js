import Head from 'next/head';
import Link from 'next/link';

// Bulma
import 'bulma/css/bulma.min.css';

const MyApp = ({ Component, pageProps }) => {
    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            
            <nav className='navbar is-black'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <Link href='/'>
                            <a className='navbar-item'>
                                <img src='MetalCommunity.png' alt='logo' width='210'/>
                            </a>
                        </Link>

                        <a className='navbar-burger burger' aria-expanded='false' data-target='navbarMenu'>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                            <span aria-hidden='true'></span>
                        </a>
                    </div>
                    <div className='navbar-menu' id='navbarMenu'>
                        <div className='navbar-start'>
                            <Link href='/albums'>
                                <a className='navbar-item'>Albums</a>
                            </Link>

                            <Link href='/reviews'>
                                <a className='navbar-item'>Reviews</a>
                            </Link>
                        </div>
                        <div className='navbar-end'>
                            <div className='navbar-item'>
                                <div className='buttons'>
                                    <a className='button is-dark'>Sign up</a>
                                    <a className='button is-light'>Log in</a>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Component { ...pageProps }/>

            <footer className='footer'>
                <h1 className='title'>
                    Alejandro Zapata Molina
                </h1>
            </footer>

            <script src='js/burger.js'></script>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Fondamento&display=swap');

                body {
                    font-family: 'Fondamento', cursive;
                }
            `}</style>
        </React.Fragment>
    ) 
}

export default MyApp;