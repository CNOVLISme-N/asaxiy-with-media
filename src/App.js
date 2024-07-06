import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Card from "./routes/card/Card";
import Wishies from "./routes/wishies/Wishies";
import NavbarMain from "./components/navbar/MainNavbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleRoute from "./routes/singleRoute/SingleRoute";
import Login from './routes/login copy/Login'
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card" element={<Card />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="like" element={<Wishies />} />
        <Route path="login" element={<Login />} />
      </Routes>

    </div >
  );
}

export default App;
