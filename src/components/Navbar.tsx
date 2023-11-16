import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Replace this with the actual path to your logo image
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { authenticated, session } = useContext(AuthContext);
  return (
    <nav className="p-4 font-cubano gap-4 flex items-center justify-between text-text">
      <Link to="/" className="flex items-center ">
        <img src={logo} className="w-9 h-9 mr-2" alt="Logo" />
        <h1 className="text-3xl text-primary">Twizzle</h1>
      </Link>
      {/* @TODO do the api route and page */}
      <form method="GET">
        <div className="relative font-jet">
          <span className="absolute sm:w-0 inset-y-0 right-2 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <img
                src="src/assets/search.png"
                alt="search"
                className="w-6 h-6"
              />
            </button>
          </span>
          <input
            type="search"
            className="pl-4  py-2 text-sm  bg-secondary rounded-md pr-10 focus:outline-none"
            placeholder="Search Twizzle"
            autoComplete="off"
          />
        </div>
      </form>
      <div className="flex space-x-3 text-lg">
        <Link to="/feed" className="flex items-center gap-1">
          <img className="w-5 h-5" src="src/assets/compass.png" alt="explore" />
          Explore
        </Link>

        <Link to="/profile" className="flex items-center gap-1">
          <img
            src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${
              authenticated ? session?.username : "Bob"
            }`}
            alt=":D"
            className="w-5 h-5 rounded"
          />
          <h2>Profile</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
