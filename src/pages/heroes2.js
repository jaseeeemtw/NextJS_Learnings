
import Link from "next/link";
import React from "react";


const HeroesPage = ({ heroes }) => {
  return (
    <>
      <h3>Heroes</h3>
      {heroes.map((hero, index) => (
        <Link key={index} href={`/superheroes/${hero.id}`}>
          <div>{hero.name}</div>
        </Link>
      ))}
    </>
  );
};

export default HeroesPage;

export const getStaticProps = async () => {
  const result = await fetch("http://localhost:4000/superheroes");
  const data = await result.json();
  return {
    props: {
      heroes: data,
    },
    revalidate: 10,
  };
};
