import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import Logo from "../assets/jefersonMaurerLogo.png"

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex shrink-0 items-center">
            <a href="/" aria-label="Home">
                {/* <h2 className="mx-2 text-2xl uppercase">JM</h2> */}
                <img src={Logo} className="mx-2 w-12.5 md:w-28"  alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
            <a
            className="hover:scale-125" 
            href="https://www.linkedin.com/in/jefersonmaurer/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Linkedin"
            >
                <FaLinkedin />
            </a>
            <a 
            className="hover:scale-125"
            href="https://github.com/jeferson1maurer" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
                <FaGithub />
            </a>
            <a 
            className="hover:scale-125"
            href="#" 
            // target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            >
                <FaInstagram />
            </a>
            <a 
            className="hover:scale-125"
            href="#" 
            // target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter"
            >
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  );
}
