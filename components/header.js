// icons
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaSquare } from "react-icons/fa";

import { menuList } from "../components/list";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-3xl h-7 mx-auto py-7 px-5 flex justify-between items-center z-50">
      <a href="/" className="cursor-pointer">
        <h1 className="text-lg">Kusuke SAKAMURA</h1>
      </a>
      <div className="flex gap-3 text-xl">
        <a
          href="https://twitter.com/menma275"
          className="hover:text-[var(--accent)] transition-all duration-300 group relative"
        >
          <FaXTwitter />
          <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100 text-xs absolute left-0 -bottom-6 px-1 py-0.5rounded-md text-[var(--font-secondary)] transition-all duration-300">
            Twitter
          </span>
        </a>
        <a
          href="https://bsky.app/profile/sakamura.bsky.social"
          className="hover:text-[var(--accent)] transition-all duration-300 group relative"
        >
          <FaSquare />
          <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100 text-xs absolute left-0 -bottom-6 px-1 py-0.5rounded-md text-[var(--font-secondary)] transition-all duration-300">
            BlueSky
          </span>
        </a>
        <a
          href="https://github.com/menma275"
          className="hover:text-[var(--accent)] transition-all duration-300 group relative"
        >
          <FaGithub />
          <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100 text-xs absolute left-0 -bottom-6 px-1 py-0.5rounded-md text-[var(--font-secondary)] transition-all duration-300">
            GitHub
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/kusuke-sakamura-09544325a/"
          className="hover:text-[var(--accent)] transition-all duration-300 group relative"
        >
          <FaLinkedin />
          <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100 text-xs absolute left-0 -bottom-6 px-1 py-0.5rounded-md text-[var(--font-secondary)] transition-all duration-300">
            LinkedIn
          </span>
        </a>
      </div>
    </header>
  );
}
