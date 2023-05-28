import React, { useEffect, useState } from "react";

const dashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const result = await fetch("http://localhost:4000/dashboard");
    const resultData = await result.json();
    setData(resultData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <h1>Data is not fetched</h1>;
  } 

  return (
    <>
      <h1>dashboard</h1>
      <p>{data.likes}</p>
      <p>{data.posts}</p>
      <p>{data.followers}</p>
      <p>{data.following}</p>
    </>
  );
};

export default dashboard;
