import React from "react";
//ssr with dynamic para

const HeroDetails = ({ hero }) => {
  return <div>Hero Details for {hero.name}</div>;
};

export default HeroDetails;

export const getServerSideProps = async (context) => {
  const { params, res, req, query } = context;
  const { heroId } = params;

  console.log(query);

  console.log(req.headers.cookie);
  res.setHeader("Set-Cookie", ['name="something"']);

  const result = await fetch(`http://localhost:4000/superheroes/${heroId}`);
  const data = await result.json();

  if (data.id === 2) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      hero: data,
    },
  };
};
