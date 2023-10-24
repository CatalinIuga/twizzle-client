import { useContext } from "react";
import { Outlet, Route, Routes as Router, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Private from "./pages/Private";

const AuthOnly = () => {
  const { authenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authenticated) navigate("/login");

  return <Outlet />;
};

function TwizzleRouter() {
  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route index element={<Home />} />
        <Route element={<AuthOnly />}>
          <Route path="/private" element={<Private />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Route>
    </Router>
  );
}

export { TwizzleRouter };
