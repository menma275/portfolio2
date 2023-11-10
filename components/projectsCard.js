import path from "path"

import Image from "next/image"

export default function ProjectsCard(props) {
  const img = props.path + ".png"
  const imgPath = "/img/" + img
  return (
    <a href={props.path}>
      <div className="group relative flex max-w-xl h-56 mx-auto overflow-hidden rounded-xl bg-white dark:bg-neutral-700 bg-opacity-30 border border-[var(--bg-secondary)] hover:border-[var(--font-secondary)] transition-all duration-500 shadow-my">
        <div className="flex flex-col w-1/2 h-full p-5 justify-between ">
          <div>
            <h1 className="mb-1 text-md">{props.name}</h1>
            <p className="text-sm font-light">{props.desc}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {props.tags.map((tag) => (
              <p key={tag} className="text-xs text-white font-medium px-2 py-0.5 rounded-full bg-[var(--accent)]">
                {tag}
              </p>
            ))}
          </div>
          <Image
            src = {imgPath}
            width = {300}
            height = {300}
            alt = {props.name}
            className="absolute top-1/4 left-1/2 h-48 rounded-md shadow-my rotate-3 transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </a>
  );
}
