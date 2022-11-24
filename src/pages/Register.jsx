import Container from "../Styling/Container.styled";
import LoginContainer, {
  BlobLeft,
  BlobRight,
  HeaderLogo,
  Logo,
} from "../Styling/Login.styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { auth } from "../helpers/firebase";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [user, setUser] = useState({ email: "", password: "", repassword: "" });
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const navigate = useNavigate();

  async function SignUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
      toastSuccessNotify("Successfully registered");
    } catch (error) {
      toastWarnNotify("Provide a better info");
      console.log(error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleRegister() {
    console.log("Handle Register");
    console.log(user);
    setEmailErr(false);
    setPassErr(false);

    if (user.email === "" || !user.email.includes("@")) {
      toastWarnNotify("A valid email is required");
      setEmailErr(true);
      return;
    }
    if (
      user.password === user.repassword &&
      user.email.includes("@") &&
      user.password.length >= 6
    ) {
      SignUp(user.email, user.password);
    } else if (user.password !== user.repassword || user.password.length < 6) {
      toastErrorNotify("Check your password");
      setPassErr(true);
    }
  }

  return (
    <Container>
      <LoginContainer>
        <Logo src="./signUp.jpg" />
        <HeaderLogo>Register</HeaderLogo>
        <BlobRight src="./blobRight.png" />
        <BlobLeft src="./blobLeft.png" />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          onChange={handleChange}
          variant="outlined"
          value={user.email || ""}
          sx={{ width: "80%", marginBottom: "30px" }}
          error={emailErr}
          helperText={emailErr && "Provide a valid email address"}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          onChange={handleChange}
          name="password"
          variant="outlined"
          error={passErr}
          helperText={passErr && "Provide a valid email address"}
          value={user.password || ""}
          sx={{ width: "80%", marginBottom: "30px" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Re-enter password"
          onChange={handleChange}
          name="repassword"
          variant="outlined"
          error={passErr}
          helperText={passErr && "Provide a valid email address"}
          value={user.repassword || ""}
          sx={{ width: "80%", marginBottom: "30px" }}
          required
        />
        <Button
          variant="contained"
          sx={{ display: "block", minWidth: "90px" }}
          onClick={handleRegister}
        >
          Sign Up
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Register;
