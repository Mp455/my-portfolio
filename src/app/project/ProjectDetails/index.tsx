"use client";

import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";

import { HiArrowNarrowLeft } from "react-icons/hi";

import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";

import { TechBadge } from "../../components/TechBadge";
import Button from "../../components/Button";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Project } from "@/types/projects";
import { fadeUpAnimation, techBadgeAnimation } from "@/lib/animations";

export type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] "
        style={{
          background: "url(/images/hero-bg.png) no-repeat center/cover",
        }}
      ></div>
      <SectionTitle
        subtitle="Projetos"
        title={project.title}
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <motion.div
        className="text-gray-400 text-center max-w-[640px] sm:my-6 text-sm sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={project.description.raw} />
      </motion.div>
      <div className="w-full max-w[330px] flex flex-wrap gap-2 items-center justify-center">
        {project.technologies.map((tech, i) => (
          <TechBadge
            key={tech.name}
            name={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}
      </div>
      <motion.div
        className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row"
        {...fadeUpAnimation}
      >
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank">
            <Button className="min-w-[180px] cursor-pointer">
              <TbBrandGithub size={16} />
              Repositório
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project?.liveProjectUrl} target="_blank">
            <Button className="min-w-[180px] cursor-pointer">
              <FiGlobe size={16} />
              Deploy do Projeto
            </Button>
          </a>
        )}
      </motion.div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};
