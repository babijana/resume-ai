import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";




export default function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
    try {
        const response = await fetch(
            "http://localhost:8081/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Invalid email or password");
        }

        const data = await response.json();

        localStorage.setItem("token", data.token);

        alert("Login successful!");

        navigate("/dashboard");

    } catch (error) {
        alert("Login failed");
        console.error(error);
    }
};
    return (
        <Card className="w-full max-w-lg p-10">

            <h1 className="text-3xl font-bold text-center">
                Welcome Back
            </h1>

            <p className="mt-2 text-center text-gray-600">
                Sign in to continue to ResumeAI
            </p>

            {/* Form */}
            <div className="mt-8 space-y-5">

                {/* Email */}
                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="flex items-center justify-between text-sm">

                    <label className="flex items-center gap-2">

                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
                        />

                        Remember me

                    </label>

                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Forgot Password?
                    </a>

                </div>

                {/* Login Button */}
                <Button
    className="w-full"
    onClick={handleLogin}
>
    Login
</Button>
                <p className="text-center text-sm text-gray-600">

    Don't have an account?

    <a
        href="#"
        className="ml-1 font-semibold text-indigo-600 hover:underline"
    >
        Register
    </a>

</p>

            </div>

        </Card>
    );
}