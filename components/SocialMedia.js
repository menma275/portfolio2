import { FaXTwitter, FaBluesky } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

export default function SocialMedia() {
    return (
        <div className="flex m-0 p-0 gap-3 text-xl items-center">
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
            href="https://bsky.app/profile/sakamura.dev"
            className="hover:text-[var(--accent)] transition-all duration-300 group relative"
            >
            <FaBluesky />
            <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100 text-xs absolute left-0 -bottom-6 px-1 py-0.5rounded-md text-[var(--font-secondary)] transition-all duration-300">
                BlueSky
            </span>
            </a>
            <a
            href="https://posts.cv/sakamura"
            className="hover:text-[var(--accent)] transition-all duration-300 group relative"
            >
            <SiReaddotcv />
            <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100 text-xs absolute left-0 -bottom-6 px-1 py-0.5rounded-md text-[var(--font-secondary)] transition-all duration-300">
                Posts.cv
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
    );
}