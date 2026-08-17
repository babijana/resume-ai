import { useState } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        university: "",
        degree: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {
        const response = await fetch(
            "http://localhost:8081/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    phone: formData.phone,
                    university: formData.university,
                    degree: formData.degree,
                }),
            }
        );

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        alert("Account created successfully!");
        navigate("/login");

    } catch (error) {
        console.error(error);
        alert("Registration failed");
    }
};

    return (
        <Card className="w-full max-w-lg p-10">

            <h1 className="text-center text-4xl font-bold">
                Create Account
            </h1>

            <p className="mt-3 mb-8 text-center text-gray-600">
                Create your ResumeAI account
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* First Name */}
                <div>
                    <label className="mb-2 block font-medium">
                        First Name
                    </label>

                    <Input
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="mb-2 block font-medium">
                        Last Name
                    </label>

                    <Input
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="mb-2 block font-medium">
                        Phone
                    </label>

                    <Input
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                {/* University */}
                <div>
                    <label className="mb-2 block font-medium">
                        University
                    </label>

                    <Input
                        name="university"
                        placeholder="Enter your university"
                        value={formData.university}
                        onChange={handleChange}
                    />
                </div>

                {/* Degree */}
                <div>
                    <label className="mb-2 block font-medium">
                        Degree
                    </label>

                    <Input
                        name="degree"
                        placeholder="Enter your degree"
                        value={formData.degree}
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Password
                    </label>

                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="mb-2 block font-medium">
                        Confirm Password
                    </label>

                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <Button type="submit" className="w-full">
    Create Account
</Button>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?
        I            <a
                        href="#"
                        className="ml-1 font-semibold text-indigo-600 hover:underline"
                    >
                        Login
                    </a>
                </p>

        </form>   

        </Card>
    );
}