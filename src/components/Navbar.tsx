import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between px-4">

            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span>blog</span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium">
                <a href="#">Home</a>
                <a href="#">Trending</a>
                <a href="#">Most Popular</a>
                <a href="#">About</a>
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                    Login 👋
                </button>
            </div>

            <div className="md:hidden flex flex-col items-center gap-4 text-lg font-medium">
                <a href="#">Home</a>
                <a href="#">Trending</a>
                <a href="#">Most Popular</a>
                <a href="#">About</a>
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                    Login 👋
                </button>
            </div>

        </div>
    );
};

export default Navbar;
