import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppRouter from "./Router/AppRouter";
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
