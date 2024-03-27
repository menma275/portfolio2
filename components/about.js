import Image from "next/image";
import portrait from "../public/img/me.png";

import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaSquare } from "react-icons/fa";
import Bluesky from "../public/img/BlueSky_logo.svg";

const timeline = [
  {
    year: 2002,
    text: "Born in Tokyo, Japan",
  },
  {
    year: 2022,
    text: "Start making Generative Art and published as  NFTs",
  },
  {
    year: 2023,
    text: "Completed the National Institute of Technology, Kumamoto College",
  },
  {
    year: 2023,
    text: "Entered the Tokyo Metropolitan University",
  },
];

export default function About() {
  return (
    <div className="my-5">
      <div className="my-5 flex flex-row gap-5">
        <Image
          src={portrait}
          alt="Portrait"
          className="w-[75px] h-[75px] rounded-full"
        />
        <div className="m-0 my-auto">
          <h1 className="mb-1 text-lg font-bold">Kusuke SAKAMURA</h1>
          <div className="flex flex-wrap gap-3">
            <div>
              <p className="text-sm font-light">Tokyo, Japan</p>
              <p className="text-sm font-light whitespace-normal">
                Generative Art / Web Develpoment, Design
              </p>
            </div>
            <div className="flex mt-auto mb-0 gap-3 text-xl">
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
                <FaSquare />
                {/* <Image src={Bluesky} alt="BlueSky" className="w-5 h-5" /> */}
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
          </div>
        </div>
      </div>
      <h1 className="mb-2 text-lg">About</h1>
      <p className="text-normal font-light">
        Hi, I&apos;m Kusuke SAKAMURA. I&apos;m a Generative Artist, Web
        Developer, and Designer. I&apos;m currently a student at the Tokyo
        Metropolitan University studying Art Engineering. I&apos;m interested in
        the intersection of art and technology, and I&apos;m always looking for
        new ways to express my creativity.
      </p>
      <div className="mt-3">
        {timeline.map((data, index) => (
          <div className="flex gap-3 text-sm" key={index}>
            <p className="font-mono">{data.year}</p>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
