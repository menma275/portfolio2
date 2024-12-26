import { FaXTwitter, FaBluesky, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiReaddotcv, SiBento } from "react-icons/si";

const socialLinks = [
  { href: "https://twitter.com/menma275", Icon: FaXTwitter, label: "Twitter" },
  { href: "https://www.instagram.com/menma275/", Icon: FaInstagram, label: "Instagram" },
  { href: "https://bsky.app/profile/sakamura.dev", Icon: FaBluesky, label: "BlueSky" },
  { href: "https://posts.cv/sakamura", Icon: SiReaddotcv, label: "Posts.cv" },
  { href: "https://bento.me/sakamura", Icon: SiBento, label: "bento" },
  { href: "https://github.com/menma275", Icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/kusuke-sakamura-09544325a/", Icon: FaLinkedin, label: "LinkedIn" }
];

const SocialLink = ({ href, Icon, label }) => (
  <a target="_blank" href={href} className="hover:text-[var(--accent)] transition-all duration-300 group relative">
    <Icon />
    <span className="opacity-0 invisible group-hover:visible group-hover:opacity-100 text-xs absolute left-0 -bottom-6 px-1 py-0.5 rounded-md text-[var(--font-secondary)] transition-all duration-300">
      {label}
    </span>
  </a>
);

export default function SocialMedia() {
  return (
    <div className="flex flex-wrap m-0 p-0 gap-3 text-xl items-center">
      {socialLinks.map((props) => (
        <SocialLink key={props.href} {...props} />
      ))}
    </div>
  );
}
