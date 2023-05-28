import Link from "next/link";
import React from "react";

const PostsPage = ({ posts }) => {
  return (
    <>
      <h3>Posts</h3>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </>
  );
};

export default PostsPage;

export const getStaticProps = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();
  return {
    props: {
      posts: data,
    },
  };
};
