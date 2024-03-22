

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                     <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Home</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">About</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Services</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Blog</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Contact</a></li>
                        </ul>
                    </div>
                        <a className="text-xl cursor-pointer font-semibold">DYNAMIC IT</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Home</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">About</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Services</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Blog</a></li>
                            <li><a className="text-base font-semibold text-gray-600 hover:text-orange-600">Contact</a></li>
                        </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-sky-400 text-white font-semibold border-2 border-sky-400 hover:bg-transparent hover:border-2 hover:border-sky-400 hover:text-sky-600 hover:duration-300">SIGNUP</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;