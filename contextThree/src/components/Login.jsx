import { useState } from "react";
import useUserDetails from "../Context/userContext";

const Login = () => {
  const [newUsername, setNewUserName] = useState("");
  const [newUserage, setNewUserAge] = useState("");

  const { setUserName, setUserAge } = useUserDetails();

  const buttonClicked = (e) => {
    e.preventDefault();

    // Simple validation example: ensure newUserage is a number
    if (isNaN(newUserage)) {
      // Handle invalid age input
      alert("Please enter a valid age.");
      return;
    }

    setUserName(newUsername);
    setUserAge(newUserage);

    // Clear form fields after successful submission
    setNewUserName("");
    setNewUserAge("");
  };

  return (
    <div className="w-full h-72 bg-orange-300 text-slate-800 flex flex-col justify-center items-center text-2xl">
      <h1 className="font-extrabold">Form</h1>
      <label>
        Username:
        <input
          type="text"
          className="border-x-2 border-y-2 border-red-600 m-3 rounded-2xl"
          value={newUsername}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          className="border-x-2 border-y-2 border-red-600 m-3 rounded-2xl"
          value={newUserage}
          onChange={(e) => setNewUserAge(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="border-x-2 border-y-2 border-red-600 hover:bg-red-400 p-3 rounded-2xl"
        onClick={buttonClicked}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
