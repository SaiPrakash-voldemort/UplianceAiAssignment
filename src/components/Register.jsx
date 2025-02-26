import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isDirty, setIsDirty] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsDirty(true);
    setError(""); 
  };


  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      return "Invalid email format";
    if (!formData.address.trim()) return "Address is required";
    if (formData.password.length < 6)
      return "Password must be at least 6 characters";
    return "";
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }


    localStorage.setItem("user", JSON.stringify(formData));
    setIsDirty(false);
    setFormData({ name: "", email: "", address: "", password: "" }); 
    alert("Registration successful! Please login.");
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  return (
    <div className="w-full h-full flex justify-center items-center p-2 m-2">
      <motion.div
        className="flex flex-col items-center w-[550px] h-[500px] bg-[color: rgb(255, 120, 0)] text-blue-800 rounded-xl shadow-custom"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-center text-4xl m-1 p-1 font-bold">Register</h1>
        <form
          className="flex flex-col items-center h-full w-10/12 gap-6"
          onSubmit={handleSubmit}
        >
          <input
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold  rounded-lg"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold  rounded-lg"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
          <input
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold  rounded-lg"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <input
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold  rounded-lg"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
          />
          <button
            className="w-10/12 h-14 p-2 bg-transparent shadow-custom text-blue-800 font-bold  rounded-lg"
            type="submit"
          >
            Submit
          </button>
          {error && <p className="text-red-200 text-sm">{error}</p>}
          <p>
            Already have an account? Click to{" "}
            <Link className="text-black underline" to={"/login"}>
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
