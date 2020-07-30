import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Metal Community</title>
      </Head>
      
      <section className='hero is-dark is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>Metal Community</h1>
            <h2 className='subtitle'>Find the best community of Metal</h2>
          </div>
        </div>
      </section>

      <div className='container random-albums'>
        <h1 className='title'>Random Albums</h1>

        <div className='albums'>
          <Link href='/'>
            <a className='album'>
              <img src='https://www.nuclearblast.de/static/articles/296/296721.jpg/1000x1000.jpg' alt='img'/>
              <h2>Spiritual instinct</h2>
            </a>
          </Link>
        </div>
      </div>

      <div className='container random-reviews'>
        <h1 className='title'>Random Reviews</h1>

        <div className='columns is-multiline'>
          <div className='column is-one-quarter'>
            <div className='card'>
              <div className='card-image'>
                <figure className='image'>

                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .random-albums {
          flex: 1;
          padding: 50px 0 0;
        }

        .albums {
          display: grid;
          grid-gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }

        .album {
          display: block;
          margin-bottom: 0.5em;
          color: #333;
          text-decoration: none;
        }

        .album img {
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          width: 100%;
        }

        .random-reviews {
          flex: 1;
          padding: 50px 0;
        }

        .image {
          height: 190px;
        }
      `}</style>

    </React.Fragment>
  )
}

export default Home;