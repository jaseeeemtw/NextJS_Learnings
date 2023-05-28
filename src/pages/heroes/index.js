import Link from "next/link";
import React from "react";

const Heroes1Page = ({ heroes }) => {
  return (
    <>
      <h3>Heroes</h3>
      {heroes.map((hero, index) => (
        <Link key={index} href={`/heroes/${hero.id}`}>
          <div>{hero.name}</div>
        </Link>
      ))}
    </>
  );
};

export default Heroes1Page;

export const getServerSideProps = async () => {
  const result = await fetch("http://localhost:4000/superheroes");
  const data = await result.json();
  return {
    props: {
      heroes: data,
    },
  };
};
