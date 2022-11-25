import { Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { HeaderLogo, Logo } from "../Styling/Login.styled";
import Button from "@mui/material/Button";
import { nanoid } from "nanoid";
import { writeUserData } from "../helpers/firebase";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { useLocation } from "react-router-dom";
const NewBlog = () => {
  const [blog, setBlog] = useState({ title: "", img: "", desc: "" });
  const { state } = useLocation();

  useEffect(() => {
    if (state !== null) {
      setBlog({ title: state.title, img: state.img, desc: state.desc });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setBlog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleAddBlog() {
    if (blog.title === "" || blog.img === "" || blog.desc === "") {
      toastErrorNotify("You need to fill all the fields");
    } else {
      if (state.item === "") {
        writeUserData(nanoid(), blog.title, blog.img, blog.desc);
        toastSuccessNotify("Great! You have successfully added");
      } else {
        toastSuccessNotify("Updated successfully");
        writeUserData(state.item, blog.title, blog.img, blog.desc);
      }
      setBlog({ title: "", img: "", desc: "" });
    }
  }
  return (
    <Container
      sx={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        maxWidth: "500px",
        minHeight: "700px",
        borderRadius: "15px",
        textAlign: "center",
        padding: "1rem",
        alignItems: "center",
      }}
    >
      <Logo src="./newBlog.jpg" />
      <HeaderLogo>Thank you for your kind contribution</HeaderLogo>
      <TextField
        id="outlined-basic"
        label="Title"
        name="title"
        onChange={handleChange}
        variant="outlined"
        value={blog.title || ""}
        sx={{ width: "80%", margin: "30px auto" }}
        // error={check}
      />
      <TextField
        id="outlined-basic"
        label="Image URL"
        onChange={handleChange}
        name="img"
        variant="outlined"
        value={blog.img || ""}
        sx={{ width: "80%", margin: "30px auto" }}
        // error={check}
      />
      <TextField
        id="outlined-basic"
        label="Description..."
        onChange={handleChange}
        name="desc"
        multiline
        variant="outlined"
        value={blog.desc || ""}
        rows={5}
        sx={{ width: "80%", margin: "30px auto" }}
        // error={check}
      />
      <Button
        variant="contained"
        sx={{ width: "50%", minWidth: "150px" }}
        onClick={handleAddBlog}
      >
        Add a blog
      </Button>
    </Container>
  );
};

export default NewBlog;
