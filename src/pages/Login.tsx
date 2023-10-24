import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [run, setRun] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!run) return;

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
      .then((res) => res.json())
      .then((r) => {
        if (r.authenticated) {
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
    if (authenticated == true) navigate("/private");

    handleLogin();
  }, [authenticated, setAuthenticated, run]);

  return (
    <>
      {!authenticated ? (
        <div className="flex">
          <button className="w-10 bg-green-700" onClick={() => setRun(true)}>
            Login
          </button>
        </div>
      ) : (
        // fallback
        <div className="">You are loged in!</div>
      )}
      <Link to={"/private"}>Private route</Link>
    </>
  );
}
