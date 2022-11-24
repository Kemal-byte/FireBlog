import React from "react";
import Container from "../Styling/Container.styled";
import LoginContainer, { HeaderLogo, Logo } from "../Styling/Login.styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <Logo src="./login.jpg" />
        <HeaderLogo>Welcome</HeaderLogo>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ width: "80%", marginBottom: "30px" }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{ width: "80%", marginBottom: "30px" }}
        />
        <Button variant="contained" sx={{ display: "block", minWidth: "90px" }}>
          Login
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;
