import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./NavBar.css";

const NavBar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-transparent flex justify-between"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex">
        <Link to={"/"}>
          <h1 className="m-1 text-blue-800 mx-2 text-4xl font-extrabold">
            upliance.ai
          </h1>
        </Link>
      </div>
      <div>
        <ul className="navBar flex font-extrabold text-white justify-center p-2 gap-14">
          <Link to={"/"}>
            <li className="text-blue-800 text-2xl m-2 p-2 font-extrabold">
              Home
            </li>
          </Link>
          <Link to={"/counter"}>
            <li className="text-blue-800 m-2 p-2 text-2xl font-extrabold">
              Counter
            </li>
          </Link>
          <Link to={"/texteditor"}>
            <li className="text-blue-800 text-2xl m-2 p-2 font-extrabold">
              TextEditor
            </li>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to={"/dashboard"}>
                <li className="text-blue-800 text-2xl m-2 p-2 font-extrabold">
                  Dashboard
                </li>
              </Link>
              <li
                className="text-blue-800 text-2xl m-2 p-2 font-extrabold cursor-pointer"
                onClick={handleLogout}
              >
                Log Out
              </li>
            </>
          ) : (
            <Link to={"/signup"}>
              <li className="text-blue-800 text-2xl m-2 p-2 font-extrabold">
                Sign Up
              </li>
            </Link>
          )}
        </ul>
      </div>
    </motion.div>
  );
};

export default NavBar;
