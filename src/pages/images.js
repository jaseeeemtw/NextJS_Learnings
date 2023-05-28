import Image from "next/image";
import React from "react";
import img from "../../public/1.png";

const Images = () => {
  return (
    <div>
      <h1>Images</h1>
      <div>
        <Image
          placeholder="blur"
          src={img}
          alt={"view"}
          width="280"
          height="420"
        />
      </div>

      {[1, 2, 3, 4].map((path, index) => (
        <div key={index}>
          <Image
            src={`/${path}.png`}
            alt={`${path} view`}
            width="280"
            height="420"
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
