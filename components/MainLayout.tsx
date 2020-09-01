import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title} | My App</title>
        <meta charSet="utf-8" />
        <meta name="description" CONTENT="This is page for posts" />
        <meta
          name="google-site-verification"
          content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
        />
      </Head>
      <nav>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/posts'}>
          <a>Posts</a>
        </Link>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          color: white;
          text-decoration: none;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
