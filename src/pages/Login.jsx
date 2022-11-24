import React, { useState } from "react";
import Container from "../Styling/Container.styled";
import LoginContainer, { HeaderLogo, Logo } from "../Styling/Login.styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { LoginUser } from "../helpers/firebase";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleLogin() {
    console.log("Clicked on login");
    try {
      LoginUser(user.email, user.password);
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(user);
  return (
    <Container>
      <LoginContainer>
        <Logo src="./login.jpg" />
        <HeaderLogo>Welcome</HeaderLogo>
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          onChange={handleChange}
          variant="outlined"
          value={user.email || ""}
          sx={{ width: "80%", marginBottom: "30px" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          onChange={handleChange}
          name="password"
          variant="outlined"
          value={user.password || ""}
          sx={{ width: "80%", marginBottom: "30px" }}
        />
        <Button
          variant="contained"
          sx={{ display: "block", minWidth: "90px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;
