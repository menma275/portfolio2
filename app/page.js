import About from "@/components/about";
import Projects from "@/components/projects";
import GenArts from "@/components/genarts";
import fsPromises from "fs/promises";
import path from "path";

import { WorkList } from "../components/list";

export default async function Home() {
  const filePath = path.join(process.cwd(), "data.json");
  const data = await fsPromises.readFile(filePath);
  console.log(data);
  const works = data.WorkList;

  return (
    <main>
      <About />
      <Projects
        title={"Interactive Art"}
        list={WorkList.filter((work) => work.junle === "Interactive_Art")}
      >
        I create interactive art that is natural, easy to understand, and makes you want to touch it!
      </Projects>
      <Projects
        title={"Web Contents"}
        list={WorkList.filter((work) => work.junle === "Web_Content")}
      >
        I design and develop websites and web applications, and am mainly interested in front-end development.
      </Projects>
      <GenArts />
    </main>
  );
}
