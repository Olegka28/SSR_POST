import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function About({ data }) {
  const linkClickhandle = () => {
    Router.push('/');
  };

  return (
    <MainLayout title="About page">
      <h2>{data.title}</h2>
      <button onClick={linkClickhandle}>Go back to home</button>
      <button onClick={() => Router.push('/posts')}>Go next to posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const data = { title: 'Information about us' };

  return {
    data,
  };
};
