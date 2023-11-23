import HorizontalDivider from "@/app/components/Divider/horizontal";
import SectionTitle from "@/app/components/SectionTitle";
import ProjectCard from "./ProjectCard";
import { Link } from "@/app/components/Link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/types/projects";

type HighlightProjectsProps = {
  projects: Project[];
};

export const HighlightProjects = ({ projects }: HighlightProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos em Destaque" />
      <HorizontalDivider className="mb-16" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[50px]">
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="mb-16" />
          </div>
        ))}
      </div>
      <p className="flex items-center gap-1.5">
        <span className="text-gray-400">Se interessou?</span>
        <Link href="/projects" className="inline-flex">
          Ver todos
          <HiArrowNarrowRight size={16} />
        </Link>
      </p>
    </section>
  );
};

export default HighlightProjects;
