import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
    return (
        <header>
            <div className="container mx-auto py-8 font-body text-3xl px-4 flex items-center justify-between text-dark">
                <h1 className="font-display text-primary">John Pioc</h1>
                <ul className="flex items-center justify-center space-x-4">
                    <li className="cursor-pointer">
                        <a href="https://github.com/Johnnyftb" target="_blank"><FaGithub /></a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="https://www.linkedin.com/in/john-pioc/" target="_blank"><FaLinkedin /></a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;