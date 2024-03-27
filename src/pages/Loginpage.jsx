import React from "react";
import Login from "../components/Login/Login";
export default function Loginpage({ setAuth }) {
    return (
        <div>
            <Login setAuth={setAuth} />
        </div>
    );
}
