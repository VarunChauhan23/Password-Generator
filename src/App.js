import React from "react";
import MainCard from "./Components/MainCard";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <MainCard />
      <ToastContainer />
    </>
  );
}

export default App;
