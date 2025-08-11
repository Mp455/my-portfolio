import ProjectCard from "./ProjectCard";
import { HiArrowNarrowRight } from "react-icons/hi";
import SectionTitle from "../../components/SectionTitle";
import HorizontalDivider from "../../components/Divider/horizontal";
import Link from "next/link";
import { Project } from "@/types/projects";

type HighlightProjectsProps = {
  projects: Project[];
};

export const HighlightProjects = ({ projects }: HighlightProjectsProps) => {
  return (
    <section className="container mx-auto py-16">
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
