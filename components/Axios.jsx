import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      const data = response.data;
      console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  return (
    <div>
      <h1>Axios Example</h1>
      <ul></ul>
    </div>
  );
};

export default Axios;
