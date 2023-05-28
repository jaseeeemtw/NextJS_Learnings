import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const EventsPage = ({ events }) => {
  const router = useRouter();

  const [eventList, setEventList] = useState(events);
  const handleClick = async () => {
    const result = await fetch("http://localhost:4000/events?category=sports");
    const resultData = await result.json();
    setEventList(resultData);
    router.push("/events?category=category", undefined, { shallow: true });
  };

  return (
    <div>
      <h1>events by {process.env.NEXT_PUBLIC_DB_USER}</h1>
      <button onClick={handleClick}>Filter by sports</button>
      <ul>
        {eventList.map((event, index) => (
          <Link key={index} href={`/events/${event.id}`}>
            <li>{event.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;

export const getServerSideProps = async (context) => {
  const user = process.env.DB_USER;

  console.log("the user is ===> " + user);

  const { query } = context;
  const { category } = query;

  if (category) {
    const result = await fetch(
      `http://localhost:4000/events?category=${category}`
    );
    const resultData = await result.json();

    return {
      props: {
        events: resultData,
      },
    };
  }

  const result = await fetch("http://localhost:4000/events");
  const resultData = await result.json();

  return {
    props: {
      events: resultData,
    },
  };
};
