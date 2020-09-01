import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';
import Router from 'next/router';
import axios from 'axios';
import { NextPageContext } from 'next';
import { MyPost } from '../../interface/post';

interface PostPageProps {
  post: MyPost;
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);

  const router = useRouter();

  const linkAllPosts = () => {
    Router.push('/posts');
  };

  useEffect(() => {
    const data = axios
      .get(`https://simple-blog-api.crew.red/posts/${router.query.id}`)
      .then((res) => res.data);

    if (!serverPost) {
      setPost(data);
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`Post page number ${router.query.id}`}>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <button onClick={linkAllPosts}>Go back to all posts</button>
    </MainLayout>
  );
}
interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query }: NextPageContext) => {
  const post: MyPost = await axios
    .get(`https://simple-blog-api.crew.red/posts/${query.id}`)
    .then((res) => res.data);

  return {
    post,
  };
};
