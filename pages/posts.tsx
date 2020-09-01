import Router from 'next/router';
import { MainLayout } from '../components/MainLayout';
import axios from 'axios';
import Link from 'next/link';
import { MyPost } from '../interface/post';

interface PostPageProps {
  posts: MyPost[];
}

export default function Posts({ posts }: PostPageProps) {
  return (
    <MainLayout title="Post pages">
      <h2>Posts pages</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => Router.push('/')}>Go back to home</button>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const posts: MyPost[] = await axios
    .get('https://simple-blog-api.crew.red/posts')
    .then((res) => res.data);

  return {
    posts,
  };
};
