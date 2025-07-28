import React from "react";

const Button = ({ oneclick, children }) => {
  const firstchildren = React.Children.toArray(children)[0];
  return (
    <button type="button" onClick={oneclick}>
      {firstchildren}
      {/* {children} affiche tout le contenu entre les balises <Button> */}
    </button>
  );
};

export default Button;
