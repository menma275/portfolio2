import { GenArtList } from "./list"
import Image from "next/image";

export default function GenArts() {
  return (
    <div className="my-5 pt-5 border-t border-[var(--font-secondary)]">
      <h1 className="mb-2 text-lg">Generative Art</h1>
      <p className="text-normal font-light">I create Generative Art with JavaScript and  WebGL and publish it as NFTs.</p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <a className="group rounded-xl p-5 bg-white dark:bg-neutral-700 bg-opacity-30 border border-[var(--bg-secondary)] hover:border-[var(--font-secondary)] transition-all duration-500 shadow-my" href="https://www.fxhash.xyz/u/sakamura">
          <h2 className="font-bold">fx(hash)</h2>
          <p className="text-sm font-light">You can mint my Generative Art here.</p>
        </a>
        <a className="rounded-xl p-5 bg-white dark:bg-neutral-700 bg-opacity-30 border border-[var(--bg-secondary)] hover:border-[var(--font-secondary)] transition-all duration-500 shadow-my" href="https://openprocessing.org/user/311225?view=sketches&o=1">
          <h2 className="font-bold">OpenProcessing</h2>
          <p className="text-sm font-light">I uploading study works here.</p>
        </a>
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-5">
        {GenArtList.map((content) => (
            <a key={content.name} href={content.url} className="relative group shadow-my overflow-hidden rounded-lg">
                <Image
                    src={content.img}
                    alt={content.name}
                    width={300}
                    height={300}
                    className="group-hover:scale-105 group-hover:opacity-50 transition-all duration-500"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--accent)] rounded-lg opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100 transition-all duration-500 ">
                  <h2 className="text-white font-bold">{content.name}</h2>
                </div>
            </a>
        ))}
      </div>
    </div>
  );
}
