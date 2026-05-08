import { Outlet } from "react-router-dom";

function AuthLayout() {

  return (
    <div className="bg-black min-h-screen transition-all duration-500">

      <Outlet />

    </div>
  );
}

export default AuthLayout;