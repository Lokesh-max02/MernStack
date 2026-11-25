import { Routes, Route } from "react-router-dom";
import Register from "../page/Register";
import LoginPage from "../page/LoginPage";
import Dashboard from "../page/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;