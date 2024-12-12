import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInDown } from "../../utils/Animations";
import { MenuModal } from "../MenuModal";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoCloudDownloadOutline } from "react-icons/io5";
import cv from "../../assets/Currículo josué ramos dev.pdf";
import logOutBeco from '../../assets/pictures/2444.png'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      {...fadeInDown}
      transition={{ ...fadeInDown.transition, delay: 1.1 }}
      className={
        "bg-darkBrown/10 text-whity shadow-sm backdrop-blur-xl sticky top-0 z-30 flex py-6 transition-colors duration-150"
      }
    >
      <div className="container mx-auto flex items-center justify-between px-10 xl:px-0 ">
        <Link
          to="/"
          className="font-Odasans text-5xl font-semibold text-outbec-laranja dark:text-Xbox-Purple"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logOutBeco} alt="logo tipo do autbecô"/>
        </Link>

        <div className="hidden gap-16 font-medium lg:flex">
          <Link
            to="/about"
            className="bottomLine text-outbec-laranja"
            onClick={() => window.scrollTo(0, 0)}
          >
            desenvolvedor
          </Link>

          <Link
            to="/projects"
            className="bottomLine text-outbec-laranja"
            onClick={() => window.scrollTo(0, 0)}
          >
            Cardápio
          </Link>
          <Link
            to="/contact"
            className="bottomLine text-outbec-laranja"
            onClick={() => window.scrollTo(0, 0)}
          >
            Contatos
          </Link>
        </div>
      </div>

      {/* Menu p Mobile */}
      <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};
