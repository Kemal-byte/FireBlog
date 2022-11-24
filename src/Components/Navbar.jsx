import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "../Styling/Navbar.style";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "../Context/AuthContextProvider";
import { auth } from "../helpers/firebase";

const Navbar = () => {
  //   const [auth, setAuth] = useState(true);?
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser);
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, cursor: "pointer", marginRight: "auto" }}
            onClick={() => navigate("/")}
          >
            FireBlog
          </Typography>
          {user?.email && (
            <div>
              <Avatar src="./avatar.png" onClick={handleMenu} />

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
                <MenuItem onClick={handleClose}>Add New Blog</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
