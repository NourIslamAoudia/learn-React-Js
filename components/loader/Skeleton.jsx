import "./Skeleton.css"; // adapte le chemin
const Skeleton = () => {
  const fakeArray = new Array(5).fill(0); // 5 éléments fictifs

  return (
    <ul className="skeleton-list">
      {fakeArray.map((_, index) => (
        <li key={index} className="skeleton-item">
          <div className="skeleton-thumbnail shimmer" />
          <div className="skeleton-text shimmer" />
        </li>
      ))}
    </ul>
  );
};

export default Skeleton;
