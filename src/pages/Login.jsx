import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please signup first.");
      return;
    }

    if (
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {

      localStorage.setItem("isLoggedIn", true);

      alert("Login successful!");

      navigate("/dashboard");

    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl"
      >

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome Back
          </h1>

          <p className="text-gray-300">
            Login to continue
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form
          autoComplete="off"
          onSubmit={handleLogin}
          className="space-y-6"
        >

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
                autoComplete="off"
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
                autoComplete="new-password"
                placeholder="Enter your password"
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

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-300 mt-6">
          Don&apos;t have an account?{" "}

          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Signup
          </Link>
        </p>

      </motion.div>
    </div>
  );
}

export default Login;