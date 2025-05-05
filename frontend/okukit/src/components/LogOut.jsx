import React, { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("Çıkış yaptınız");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button
        className='cursor-pointer bg-red-700 px-4 py-2 text-white rounded'
        onClick={handleLogOut}
      >
        Çıkış{" "}
      </button>
    </div>
  );
};

export default LogOut;
