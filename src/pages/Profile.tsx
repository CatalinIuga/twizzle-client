import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { setAuthenticated, authenticated } = useContext(AuthContext);
  const [run, setRun] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) navigate("/login");
    logout();
  }, [run]);

  const logout = () => {
    if (!run) return;
    fetch("https://localhost:7267/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setAuthenticated(false, null);
          return navigate("/");
        }
        throw new Error("Oppsie daisy... try again later!");
      })
      .catch(alert);
  };

  return (
    <>
      {authenticated && (
        <div className="flex flex-col">
          <h3>This is provate</h3>
          <div>You are logged in!</div>
          <button className="w-fit bg-green-700" onClick={() => setRun(true)}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}
