import React from "react";
import SignUp from "../components/SignUp/SignUp";
export default function Loginpage({ setAuth }) {
    return (
        <div>
            <SignUp setAuth={setAuth} />
        </div>
    );
}
