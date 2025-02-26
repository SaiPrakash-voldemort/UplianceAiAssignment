import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsDirty(true);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError("Invalid email format");
      return;
    }
    if (!formData.password) {
      setError("Password is required");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser.email !== formData.email || storedUser.password !== formData.password) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    setIsDirty(false);
    setFormData({ email: "", password: "" });
    navigate("/dashboard"); // Redirect to Dashboard
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  return (
    <div className="w-full h-full flex justify-center items-center p-2 m-2">
      <motion.div
        className="flex flex-col items-center w-[550px] h-[380px] bg-[color: rgb(255, 120, 0)] text-blue-800 rounded-xl shadow-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-center text-4xl m-1 p-1 font-bold">Login</h1>
        <form className="flex flex-col items-center h-full w-10/12 gap-6" onSubmit={handleSubmit}>
          <input
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold rounded-lg"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          <input
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold rounded-lg"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          <button
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold rounded-lg"
            type="submit"
          >
            Login
          </button>
          {error && <p className="text-red-200 text-sm">{error}</p>}
          <p>
            Don&apos;t have an account? Click to{" "}
            <Link className="text-black underline" to={"/signup"}>
              SignUp
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;