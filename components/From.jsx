import Button from "./Button";

const From = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter your name"
      />
      <Button
        onClick={() => alert("email:" + document.getElementById("email").value)}
      >
        Submit
      </Button>
    </form>
  );
};

export default From;
