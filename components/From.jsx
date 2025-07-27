import Button from "./button";

const From = () => {
  return (
    <form>
      <span htmlFor="email">Email</span>
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
