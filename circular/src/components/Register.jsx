import React, { useState } from "react";
import image from "../assets/Background/2.png";
import "./Login.css";

function Register() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/register.php", {
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
    <div class="main">

     
        <section class="signup">
            <div class="container">
                <div class="signup-content">

                    <div class="signup-form">

                        <h2 class="form-title">Sign up</h2>

                        <form action="../action/register_user_action.php" method="POST" class="register-form"
                            id="register-form">
                            <div class="form-group">
                                <label for="fname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="fname" id="fname" placeholder="First Name" />
                            </div>

                            <div class="form-group">
                                <label for="lname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="lname" id="lname" placeholder="Last Name" />
                            </div>

                            <div class="form-group"
                                style="position: flex;margin-bottom: 25px;padding: 6px 30px; overflow: hidden;">
                                <label for="gender"><i class="zmdi zmdi-accounts"></i></label>
                                <select name="frole" data-kwimpalastatus="alive"
                                    style="border: 1px solid #6C757D; border-radius: 5px; padding: 0 0; font: 13px;line-height: 1.5; color: #6C7293;border-color: #f8f8f8;">
                                    {<?php
                                    include "../functions/select_role_fxn.php";
                                    drop_down_options();
                                    ?>}
                                </select>
                            </div>

                            <div class="form-group" id="gender-opt">
                                <label for="gender"><i class="zmdi zmdi-male-female"></i></label>
                                <select name="gender" id="gender" data-kwimpalastatus="alive">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>

                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>

                            <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>

                            <div class="form-group">
                                <label for="dob"><i class="zmdi zmdi-calendar"></i></label>
                                <input type="date" name="dob" id="dob" placeholder="Date of Birth" required />
                            </div>

                            <div class="form-group">
                                <label for="tel"><i class="zmdi zmdi-phone"></i></label>
                                <input type="tel" name="tel" id="tel" placeholder="Telephone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                            </div>

                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all
                                    statements in <a href="#" class="term-service">Terms of service</a></label>
                            </div>

                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>

                    <div class="signup-image">
                        <figure><img src={image} alt="sing up image"/></figure>
                        <a href="Login_view.php" class="signup-image-link">I am
                            already member</a>
                    </div>

                </div>
            </div>
        </section>
    </div>
  );
}

export default Register;
