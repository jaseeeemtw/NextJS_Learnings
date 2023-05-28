import User from "../../components/user";
import React from "react";

const Users = ({ users }) => {
  return (
    <>
      <h1>List of Users</h1>
      <ul>
        {users.map((user, index) => (
          <User name={user.name} key={index}/>
        ))}
      </ul>
    </>
  );
};

export default Users;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};
