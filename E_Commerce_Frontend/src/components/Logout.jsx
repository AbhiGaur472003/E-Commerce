import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/userRedux";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutSuccess());
  }, [dispatch]);

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
};
export default Logout;



