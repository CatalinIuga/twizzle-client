import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("https://localhost:7267/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: "admin@email.com",
        password: "12345",
      }),
    })
      .then((res) => res.text())
      .then((r) => {
        if (r.includes("successfull")) {
          fetch("https://localhost:7267/api/auth/session", {
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          })
            .then((res) => res.json())
            .then((r) => setAuthenticated(true, r));
        }
      });
  };

  useEffect(() => {
    handleLogin();
  }, []);

  useEffect(() => {
    if (authenticated == true) navigate("/private");
  }, [setAuthenticated, navigate]);
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <Link to={"/private"}>Go</Link>
    </>
  );
}
