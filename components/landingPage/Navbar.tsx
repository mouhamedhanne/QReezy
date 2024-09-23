import Image from "next/image";
import Link from "next/link";
import { Logo } from "../elements/Logo";
import { Github } from "lucide-react";

export const Navbar = () => {
  return (
    <header>
      <nav
        className=" bg-white opacity-95 shadow border-gray-200
             fixed w-full z-20 top-0 left-0 border-b border-gray-200
             py-[1.2rem]"
      >
        <div className="flex justify-between items-center mx-7">
          <div>
            <Logo width="60" />
          </div>

          <div></div>

          <div className="flex items-center justify-center space-x-3">
            <Link href="https://github.com/mouhamedhanne" target="_blank">
              {" "}
              <Github className="text-3xl hidden lg:block" />
            </Link>
            <Link href="/Translation">
              <button
                className="px-4 py-2 rounded-[10px] font-normal 
                     text-[16px] bg-black text-white
                   hover:bg-hover_bg_button transition duration-300
                     ease-in-out transform"
              >
                Commencer
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
