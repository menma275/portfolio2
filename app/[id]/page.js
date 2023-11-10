import Link from "next/link";
import { WorkList } from "@/components/list";
import Image from "next/image";
import Header from "../../components/header";
import img from "../../public/img/archetype.png";
import { TbExternalLink } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Page({ params }) {
  const post = WorkList.find((work)=>work.path === params.id)
  const img = post.path + ".png"
  const imgPath = "/img/" + img
  console.log(imgPath);
  return (
    <div>
      <Header />
      <div className="mt-16">
        <div className="flex justify-between">
          <div>
            <h1 className="mb-2 text-lg">{post.name}</h1>
          </div>
          <div>
            {post.url && 
              <a href={post.url}>
                <button className="text-sm font-medium text-[var(--accent)]  px-3 py-1 group">
                  <div className="flex items-center gap-1">
                    Visit
                    <HiArrowNarrowRight className="group-hover:translate-x-1/4 duration-500 text-md" />
                  </div>
                </button>
              </a>
            }
          </div>
        </div>
        <Image
          src={imgPath}
          width={600}
          height={600}
          alt={post.name}
          className=" w-full max-w-[450px] mx-auto my-5 rounded-lg shadow-my"
        />
        <div className="my-3">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <div key={tag} className="px-2 py-0.5 rounded-full bg-[var(--accent)] text-white text-xs">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div>
          {post.team.length !== 0 &&
            <div className="p-3 rounded-xl bg-white dark:bg-neutral-700 bg-opacity-30 border border-[var(--bg-secondary)]">
              <div className="flex justify-between ">
                <h2 className="text-sm font-bold">Role in the team</h2>
                <div className="flex flex-wrap gap-2">
                  {post.team.map((role) => (                  <div className="px-2 py-0.5 rounded-md bg-[var(--font-primary)] text-[var(--bg-primary)] text-xs">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        </div>
        <div className="my-4 whitespace-pre-wrap">
          <h2 className="text-md font-bold my-2">Outline</h2>
          <p className="text-sm font-light whte">
            {post.outlineJA}
          </p>
          <p className="font-light mt-3">
            {post.outlineEN}
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-md font-bold my-2">Thought</h2>
          <p className="text-sm font-light">
            {post.thoughtJA}
          </p>
          <p className="font-light mt-3">
            {post.thoughtEN}
          </p>
        </div>
      </div>
    </div>
  );
}