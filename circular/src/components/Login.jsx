import React, { useState } from "react";
import logo from "../assets/Background/1.jpeg";
import "./Login.css";

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
      <div class="main">
        <section class="sign-in">
          <div class="container">
            <div class="signin-content">
              <div class="signin-image">
                <figure>
                  <img src={logo} alt="sing up image" />
                </figure>
                <a
                  href="http://localhost:5173/register"
                  class="label-agree-term"
                >
                  Create an account
                </a>
              </div>

              <div class="signin-form">
                <h2 class="form-title">Sign in</h2>
                <form method="POST" class="register-form" id="login-form">
                  <div class="form-group">
                    <label for="your_name">
                      <i class="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="your_name"
                      id="your_name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="your_pass">
                      <i class="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      class="agree-term"
                    />
                    <label for="remember-me" class="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div class="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      class="form-submit"
                      value="Log in"
                    />
                  </div>
                </form>
                <div class="social-login">
                  <span class="social-label">Or login with</span>
                  <ul class="socials">
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="display-flex-center zmdi zmdi-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
