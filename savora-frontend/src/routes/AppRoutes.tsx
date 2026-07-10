import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home";
import Menu from "../pages/customer/menu";
import Reservation from "../pages/customer/reservation";
import Login from "../pages/auth/login";
import Register from "../pages/auth/registration";
import Dashboard from "../pages/customer/dashboard";
import Orders from "../pages/customer/orders";
import Profile from "../pages/customer/Profile";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route
          path="/reservation"
          element={<Reservation />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;