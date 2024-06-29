import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaHackerrank} from "react-icons/fa";


const Navbar = () => {
    return (
      <nav className= "mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
           
            <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Portfolio</h2>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/dulmi-witharana-39097a277"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/DulmiWitharana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/dulmiwitharana/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.hackerrank.com/profile/dulmiwitharana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaHackerrank />
        </a>
        </div>
    </nav>);
};

export default Navbar;