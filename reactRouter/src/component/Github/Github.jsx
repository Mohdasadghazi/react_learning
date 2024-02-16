import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setdata] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Mohdasadghazi")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setdata(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Mohdasadghazi");
  return response.json();
};
