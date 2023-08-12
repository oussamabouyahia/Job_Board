import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Signin from "./components/Signin";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import JobApply from "./components/JobApply";
import AddJob from "./components/AddJob";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/jobApply" element={<JobApply/>} />
          <Route path="/Addjob" element={<AddJob/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
