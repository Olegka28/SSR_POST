import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

export default function Index() {
  return (
    <MainLayout title="Home page">
      <h1>Hello Next.js</h1>
      <p>
        <Link href={'/about'}>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href={'/posts'}>
          <a>Post</a>
        </Link>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel consequatur fugiat dicta.
        Sequi deleniti neque accusamus iusto omnis cumque magni hic earum ex, accusantium quos
        dolorem aliquid alias, animi eveniet perspiciatis vel doloremque. Perspiciatis cupiditate
        quisquam eius id cum quo necessitatibus ipsam aliquid?
      </p>
    </MainLayout>
  );
}
