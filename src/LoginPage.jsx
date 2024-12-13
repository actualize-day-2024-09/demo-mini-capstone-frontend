import axios from "axios";
import { useState } from "react";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("admin", response.data.admin);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login">
      <h1 className="text-3xl font-bold">Login</h1>
      <ul className="list-disc p-4 text-red-600">
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          Email: <input name="email" type="email" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <div className="mb-2">
          Password: <input name="password" type="password" className="mt-1 block w-full rounded-md border-gray-300" />
        </div>
        <button type="submit" className="rounded border border-gray-300 p-2 mt-2 hover:bg-gray-100">
          Login
        </button>
      </form>
    </div>
  );
}
