import React, { useContext, useState } from "react";
import Container from "../Styling/Container.styled";
import LoginContainer, {
  Anchortag,
  HeaderLogo,
  Logo,
} from "../Styling/Login.styled";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../helpers/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [check, setCheck] = useState(false);
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  async function LoginUser(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Successfully logged in");
      setUser(userInfo);
      navigate("/");
    } catch (error) {
      toastErrorNotify("Password or Email is incorrect");
      setCheck(true);
      console.log(error.message);
    }
  }

  function handleLogin() {
    setCheck(false);
    try {
      LoginUser(userInfo.email, userInfo.password);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Container>
      <LoginContainer>
        <Logo src="./login.jpg" />
        <HeaderLogo>Login</HeaderLogo>
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          onChange={handleChange}
          variant="outlined"
          value={userInfo.email || ""}
          sx={{ width: "80%", marginBottom: "30px" }}
          error={check}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          onChange={handleChange}
          name="password"
          variant="outlined"
          value={userInfo.password || ""}
          sx={{ width: "80%", marginBottom: "5px" }}
          error={check}
        />
        <Box
          sx={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "flex-end",
            width: "80%",
          }}
        >
          <Anchortag onClick={() => navigate("/register")}>
            Don't have an account
          </Anchortag>
        </Box>
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
