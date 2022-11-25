import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Details from "../pages/Details";
import NewBlog from "../pages/NewBlog";
import Dashboards from "../pages/Dashboards";
import { GlobalStyles } from "../Styling/GlobalStyles";
import PrivateRouter from "./PrivateRouter";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../Context/AuthContextProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../helpers/firebase";

const AppRouter = () => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
  }, []);
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route index element={<Dashboards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>

        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<NewBlog />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
