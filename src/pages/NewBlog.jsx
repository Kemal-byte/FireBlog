import { Container, TextField } from "@mui/material";
import React from "react";

const NewBlog = () => {
  return (
    <Container
      sx={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        width: "500px",
        minHeight: "700px",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Title"
        name="title"
        // onChange={handleChange}
        variant="outlined"
        // value={user.email || ""}
        sx={{ width: "80%", margin: "30px auto" }}
        // error={check}
      />
      <TextField
        id="outlined-basic"
        label="Image URL"
        // onChange={handleChange}
        name="img"
        variant="outlined"
        // value={user.password || ""}
        sx={{ width: "80%", margin: "30px auto" }}
        // error={check}
      />
      <TextField
        id="outlined-basic"
        label="Description..."
        // onChange={handleChange}
        name="desc"
        multiline
        variant="outlined"
        // value={user.password || ""}
        rows={5}
        sx={{ width: "80%", margin: "30px auto" }}
        // error={check}
      />
    </Container>
  );
};

export default NewBlog;
