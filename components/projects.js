import ProjectsCard from "./projectsCard";

export default function Projects(props) {
  return (
    <div className="my-16">
      <h1 className="mb-2 text-lg">{props.title}</h1>
      <p className="text-normal font-light">{props.children}</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {props.list.map((content) => (
          <ProjectsCard
            key={content.path}
            path={content.path}
            name={content.name}
            desc={content.desc}
            tags={content.tags}
            img={content.img}
          />
        ))}
      </div>
    </div>
  );
}
