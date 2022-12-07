import "./App.css";
import AppRouter from "./Router/AppRouter";
import AuthContextProvider from "./Context/AuthContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as dotenv from "dotenv";

function App() {
  // console.log(process.env);
  return (
    <AuthContextProvider>
      <ToastContainer />
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
