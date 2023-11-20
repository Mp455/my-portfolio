import HorizontalDivider from "@/app/components/Divider/horizontal";
import SectionTitle from "@/app/components/SectionTitle";
import ProjectCard from "./ProjectCard";
import { Link } from "@/app/components/Link";
import { HiArrowNarrowRight } from "react-icons/hi";
export const HighlightedProjects = () => {
  const projects = [
    {
      title: "FSW Trips",
      imageSrc: "/images/thumb-fsw.png",
      thumbnailAlt: "Thumbnail do Projeto FSW Trips",
      description:
        "Site de reservas de viagens com autenticação do Google e forma de pagamento Stripe.",
    },
    {
      title: "React Notas",
      imageSrc: "/images/thumb-react.png",
      thumbnailAlt: "Thumbnail do Projeto React Notas",
      description:
        "Projeto no qual você consegue adicionar notas e listar tags e links de tarefas importantes que deseja salvar.",
    },
  ];

  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos em Destaque" />
      <HorizontalDivider className="mb-16" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[50px]">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            thumbnailAlt={project.thumbnailAlt}
            description={project.description}
          />
        ))}
      </div>

      <HorizontalDivider className="mb-16" />
      <p className="flex items-center gap-1.5">
        <span className="text-gray-400">Se interessou?</span>
        <Link href="/projects" className="inline-flex">
          Ver todos
          <HiArrowNarrowRight />
        </Link>
      </p>
    </section>
  );
};

export default HighlightedProjects;
