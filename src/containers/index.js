import { Route, Routes } from "react-router-dom";
import Axios from "axios";
import Home from "./pages/Home";

const Containers = () => {
  Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

  return (
    <Routes>
      <Route path={"*"} element={<Home />} />
    </Routes>
  );
};
export default Containers;
