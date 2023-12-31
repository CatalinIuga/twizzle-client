import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const { session, authenticated, setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const checkSessionStatus = async () => {
    fetch("https://localhost:7267/api/auth/session", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((r) => setAuthenticated(r.authenticated, r.session))
      .catch((e) => {
        console.error(e);
        setAuthenticated(false, null);
      });

    setLoading(false);
  };

  useEffect(() => {
    checkSessionStatus();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container px-10 min-h-screen">
      <Navbar />
      <Outlet />
      <div className="absolute bottom-0 left-0 text-text font-bold text-3xl">
        Session: {authenticated && JSON.stringify(session)}
      </div>
    </div>
  );
};

export default Layout;
