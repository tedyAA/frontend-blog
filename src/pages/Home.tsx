import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div className="mt-4 flex flex-col gap-6 px-4">
            <div className="flex gap-4 text-sm text-gray-600">
                <Link to="/">Home</Link>
                <span>•</span>
                <span className="text-blue-800">Blogs and Articles</span>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                <div>
                    <h1 className="text-gray-800 text-2xl md:text-5xl font-bold">
                        Simple Blog App with React + Node.js
                    </h1>

                    <p className="mt-6 text-md md:text-xl text-gray-600">
                        A clean and modern blog where you can read and share ideas easily.
                    </p>
                </div>

                <Link to="/write" className="relative hidden md:block">
                    <div className="w-40 h-40 rounded-full border flex items-center justify-center animate-spin-slow text-xs tracking-widest">
                        Write • Share • Create •
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold">
                            Go
                        </div>
                    </div>
                </Link>

            </div>

            <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 bg-gray-200 rounded-full">All</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full">Technology</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full">Design</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full">Life</span>
            </div>

            <div className="grid md:grid-cols-3 gap-4">

                <div className="p-4 border rounded-xl">
                    <h2 className="font-bold">First Blog Post</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Simple introduction to the blog system.
                    </p>
                </div>

                <div className="p-4 border rounded-xl">
                    <h2 className="font-bold">React Tips</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Learn React basics and best practices.
                    </p>
                </div>

                <div className="p-4 border rounded-xl">
                    <h2 className="font-bold">Node Backend</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Build a simple API with Express.
                    </p>
                </div>

            </div>

            <div>
                <h1 className="my-6 text-xl font-semibold text-gray-700">
                    Recent Posts
                </h1>

                <div className="space-y-4">

                    <div className="p-4 border rounded-lg">
                        <h3 className="font-bold">Understanding Full Stack Development</h3>
                        <p className="text-sm text-gray-600">
                            How frontend and backend work together.
                        </p>
                    </div>

                    <div className="p-4 border rounded-lg">
                        <h3 className="font-bold">Why React is Popular</h3>
                        <p className="text-sm text-gray-600">
                            A quick overview of React advantages.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Homepage;
