import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState({});

  useEffect(() => {
    const checkSessionStatus = async () => {
      try {
        const response = await fetch(
          "https://localhost:7267/api/auth/session",
          {
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (response.ok) {
          setLoading(false);
          const ses = await response.json();
          setSession(ses);
        } else {
          navigate("/login");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        navigate("/login");
      }
    };

    checkSessionStatus();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Outlet />
      {session && JSON.stringify(session)}
    </div>
  );
};

export default Layout;
