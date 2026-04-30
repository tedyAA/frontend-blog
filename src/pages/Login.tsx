const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4">

            <div className="w-full max-w-sm p-6 border rounded-xl shadow-md">

                <h1 className="text-2xl font-bold text-center mb-6">
                    Login
                </h1>

                <form className="flex flex-col gap-4">

                    <input
                        type="text"
                        placeholder="Username"
                        className="border p-3 rounded-md"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 rounded-md"
                    />

                    <button
                        type="button"
                        className="bg-blue-800 text-white py-2 rounded-md"
                    >
                        Sign In
                    </button>

                </form>

                <p className="text-sm text-center mt-4 text-gray-500">
                    Don’t have an account? Register
                </p>

            </div>

        </div>
    );
};

export default LoginPage;
