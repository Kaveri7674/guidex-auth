import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import AuthLayout from "./components/AuthLayout";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Auth Pages */}
        <Route element={<AuthLayout />}>

          <Route path="/" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

        </Route>

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;