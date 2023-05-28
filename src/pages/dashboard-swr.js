import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const result = await fetch("http://localhost:4000/dashboard");
  if (!result.ok) {
    throw new Error("fetch failed");
  }
  const resultData = await result.json();
  return resultData;
};

const DashboardSWR = () => {
  const { data, error, isLoading } = useSWR("dashboard", fetcher);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>Error occured</h1>;
  }

  return (
    <div>
      <h1>Dashboard SWR</h1>
      <p>{data.likes}</p>
      <p>{data.posts}</p>
      <p>{data.followers}</p>
      <p>{data.following}</p>
    </div>
  );
};

export default DashboardSWR;
