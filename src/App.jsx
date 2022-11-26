import "./App.css";
import AppRouter from "./Router/AppRouter";
import AuthContextProvider from "./Context/AuthContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
