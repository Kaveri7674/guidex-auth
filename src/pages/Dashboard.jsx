import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    navigate("/");
  }

}, []);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

      {/* Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-lg backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl text-center"
      >

        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome
        </h1>

        <p className="text-2xl text-blue-400 font-semibold mb-2">
          {user?.name}
        </p>

        <p className="text-gray-300 mb-8">
          You have successfully logged in.
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-3 rounded-xl text-white font-semibold hover:scale-105 transition duration-300"
        >
          Logout
        </button>

      </motion.div>
    </div>
  );
}

export default Dashboard;