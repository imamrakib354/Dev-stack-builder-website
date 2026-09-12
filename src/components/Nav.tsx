import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 p-2">

            <div className="container mx-auto px-6 flex justify-between items-center">

                <img src={Logo} alt="Dev Stack" />

                <ul className="flex items-center gap-6">
                    <li className="hover:text-[#db2777]">Home</li>
                    <li className="hover:text-[#db2777]">Technologies</li>
                    <li className="hover:text-[#db2777]">Projects</li>
                    <li className="hover:text-[#db2777]">About</li>
                    <li className="hover:text-[#db2777]">Contact</li>
                </ul>

                <ul className="flex items-center gap-4">
                    <li className="hover:text-[#db2777]">
                        <button>Sign In</button>
                    </li>

                    <li className="hover:text-[#db2777]">
                        <button className="btn btn-secondary rounded-full hover:text-gray-700 hover:bg-[#d63c7f]">
                            Sign Up
                        </button>
                    </li>
                </ul>

            </div>

        </nav>
    );
};

export default Nav;