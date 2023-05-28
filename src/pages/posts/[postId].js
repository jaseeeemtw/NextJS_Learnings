import { useRouter } from "next/router";
import React from "react";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Fallback page</h1>;
  }

  const { postId } = router.query;

  return (
    <div>
      <h2>Post Details for post - {postId}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;

export const getStaticPaths = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await result.json();

  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: {
      post: data,
    },
  };
};
