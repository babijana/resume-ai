import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function RegisterForm() {
    return (
        <Card className="w-full max-w-lg p-10">

            <h1 className="text-center text-4xl font-bold">
                Create Account
            </h1>

            <p className="mt-3 mb-8 text-center text-gray-600">
                Create your ResumeAI account
            </p>

            <div className="space-y-6">

                {/* Full Name */}

                <div>
                    <label className="mb-2 block font-medium">
                        Full Name
                    </label>

                    <Input
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email */}

                <div>
                    <label className="mb-2 block font-medium">
                        Email
                    </label>

                    <Input
                        type="email"
                        placeholder="Enter your email"
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
                    />
                </div>

                {/* Confirm Password */}

                <div>
                    <label className="mb-2 block font-medium">
                        Confirm Password
                    </label>

                    <Input
                        type="password"
                        placeholder="Confirm your password"
                    />
                </div>

                <Button className="w-full">
                    Create Account
                </Button>

                <p className="text-center text-sm text-gray-600">
                    Already have an account?
                    <a
                        href="#"
                        className="ml-1 font-semibold text-indigo-600 hover:underline"
                    >
                        Login
                    </a>
                </p>

            </div>

        </Card>
    );
}