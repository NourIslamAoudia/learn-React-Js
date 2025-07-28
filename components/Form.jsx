import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page et n'envoie pas les données du formulaire dans l'URL
    //validation des données du formulaire
    if (!e.target.email.value || !e.target.password.value) {
      alert("Please fill in all fields");
      return;
    }
    setUser({
      email: e.target.email.value,
      password: e.target.password.value,
    });
    //send data to the server API
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
