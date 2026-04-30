import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between px-4">
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src={logo} alt="Logo" className="w-8 h-8"/>
                <span>lamalog</span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium">
                <Link to={"/"}>Home</Link>
                <a href="#">Trending</a>
                <a href="#">Most Popular</a>
                <a href="#">About</a>
                <Link to={"/login"}>
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                    Login 👋
                </button>
                </Link>
            </div>
            <div className="md:hidden flex flex-col items-center gap-4 text-lg font-medium">
                <Link to={"/"}>Home</Link>
                <a href="#">Trending</a>
                <a href="#">Most Popular</a>
                <a href="#">About</a>
                <Link to={"/login"}>
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                    Login 👋
                </button>
                </Link>
            </div>

        </div>
    );
};

export default Navbar;
