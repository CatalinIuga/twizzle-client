import { Route, Routes as Router } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import NoPage from "./pages/NoPage";
import Private from "./pages/Private";

function TwizzleRouter() {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/private" element={<Private />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Router>
  );
}

export { TwizzleRouter };
