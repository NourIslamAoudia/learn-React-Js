import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader/Loader"; // ajuster le chemin si besoin
import Skeleton from "./loader/Skeleton"

const Axios = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setFetchedData(response.data);
    } catch (error) {
      setError("Erreur lors du chargement");
    } finally {
      setIsLoading(false);
    }
  };
  // Appel de la fonction getData lors du premier rendu du composant
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Axios Example</h1>
      {isLoading ? (
        <Skeleton />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {fetchedData.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Axios;
