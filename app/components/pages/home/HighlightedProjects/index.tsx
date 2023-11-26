import HorizontalDivider from "@/app/components/Divider/horizontal";
import SectionTitle from "@/app/components/SectionTitle";
import ProjectCard from "./ProjectCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "@/app/components/Link";
import { Project } from "@/app/types/projects";

type HighlightProjectsProps = {
  projects: Project[];
};

export const HighlightProjects = ({ projects }: HighlightProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
