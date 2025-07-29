// components/Loader.jsx
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner"></div>
      <p>Loading Photos, please wait...</p>
    </div>
  );
};

export default Loader;
