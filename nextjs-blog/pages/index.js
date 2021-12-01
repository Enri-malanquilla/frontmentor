import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <div>
          <img src='image-jeremy.png' />
          <h2> Report for</h2>
          <h1>Jeremy Robson</h1>
        </div>
        <nav>
          <button>Daily</button>
          <button>Weekly</button>
          <button>Monthly</button>
        </nav>
      </header>
      <main className={styles.main}>
        <section className='info'>
          <aside>
            <img src='icon-play.svg' />
          </aside>
          <article>
            <h1>Work</h1>
            <h2>5hrs</h2>
            <p>Previous - 7hrs</p>
            <button>...</button>
          </article>
        </section>
        <section className='info'>
          <aside>
            <img src='icon-play.svg' />
          </aside>
          <article>
            <h1>Work</h1>
            <h2>5hrs</h2>
            <p>Previous - 7hrs</p>
            <button>...</button>
          </article>
        </section>
        <section className='info'>
          <aside>
            <img src='icon-play.svg' />
          </aside>
          <article>
            <h1>Work</h1>
            <h2>5hrs</h2>
            <p>Previous - 7hrs</p>
            <button>...</button>
          </article>
        </section>
        <section className='info'>
          <aside>
            <img src='icon-play.svg' />
          </aside>
          <article>
            <h1>Work</h1>
            <h2>5hrs</h2>
            <p>Previous - 7hrs</p>
            <button>...</button>
          </article>
        </section>
        <section className='info'>
          <aside>
            <img src='icon-play.svg' />
          </aside>
          <article>
            <h1>Work</h1>
            <h2>5hrs</h2>
            <p>Previous - 7hrs</p>
            <button>...</button>
          </article>
        </section>
        <section className='info'>
          <aside>
            <img src='icon-play.svg' />
          </aside>
          <article>
            <h1>Work</h1>
            <h2>5hrs</h2>
            <p>Previous - 7hrs</p>
            <button>...</button>
          </article>
        </section>
      </main>
    </div>
  );
}
