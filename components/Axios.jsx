import { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // facultatif pour gérer les erreurs

  const getData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setFetchedData(response.data);
      setIsLoading(false);
      console.log("Data fetched successfully:", response.data);
    } catch (error) {
      setError("Erreur lors du chargement");
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Axios Example</h1>
      <p>Data fetched from the API will be logged in the console.</p>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {!isLoading &&
          !error &&
          fetchedData.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
};

export default Axios;
