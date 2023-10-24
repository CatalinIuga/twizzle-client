import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Private() {
  const { session, setAuthenticated } = useContext(AuthContext);

  const logout = () => {
    setAuthenticated(false, null);
  };

  return (
    <>
      <div className="flex">
        <h3>This is provate</h3>
        <div>You are logged in!</div>
        <p>{JSON.stringify(session)}</p>
        <button onClick={logout}>OUT</button>
      </div>
    </>
  );
}
