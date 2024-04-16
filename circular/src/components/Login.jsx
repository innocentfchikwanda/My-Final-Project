import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/server.php", {
        method: "POST",
        body: new URLSearchParams({ name }), // Serialize form data
      });
      const data = await response.text();
      setResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="Login">
      <div>
        <form id="Login" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default Login;
