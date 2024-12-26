import Image from "next/image";
import portrait from "../public/img/me.png";
import SocialMedia from "./SocialMedia";

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
      <h1 className="mb-1 text-lg font-bold">Kusuke SAKAMURA</h1>
      <div className="my-5 flex flex-row gap-5">
        <Image
          src={portrait}
          alt="Portrait"
          className="w-[75px] h-[75px] rounded-full"
        />
        <div className="m-0 w-full my-auto">
          <div className="flex flex-wrap w-full justify-between gap-3">
            <div>
              <p className="text-sm font-light">Tokyo, Japan</p>
              <p className="text-sm font-light whitespace-normal">
                Generative Art / Web Develpoment, Design
              </p>
            </div>
            <SocialMedia />
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
