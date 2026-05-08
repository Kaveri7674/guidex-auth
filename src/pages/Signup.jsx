import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));

    alert("Signup successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-10 right-10"></div>

      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 bottom-10 left-10"></div>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
      >

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Create Account
          </h1>

          <p className="text-gray-300">
            Signup to get started
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">

          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm">
              Full Name
            </label>

            <div className="flex items-center mt-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3">

              <FaUser className="text-gray-400 mr-3" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-full"
              />

            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">
              Email
            </label>

            <div className="flex items-center mt-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3">

              <FaEnvelope className="text-gray-400 mr-3" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-full"
              />

            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">
              Password
            </label>

            <div className="flex items-center mt-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3">

              <FaLock className="text-gray-400 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-full"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-gray-300 text-sm">
              Confirm Password
            </label>

            <div className="flex items-center mt-2 bg-white/10 border border-white/20 rounded-xl px-4 py-3">

              <FaLock className="text-gray-400 mr-3" />

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-transparent outline-none text-white w-full"
              />

            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}

          <Link
            to="/"
            className="text-pink-400 hover:text-pink-300 font-semibold"
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}

export default Signup;