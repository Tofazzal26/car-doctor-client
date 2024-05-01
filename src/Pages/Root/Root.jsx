import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
