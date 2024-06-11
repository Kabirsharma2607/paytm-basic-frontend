import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
      <div className="flex flex-col justify-center m-2">
        <Button
          label={"Log Out"}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
        />
      </div>
    </div>
  );
}

export default AppBar;