import { Metadata } from "next";
import { ProjectSections } from "../../project/ProjectSections";
import { ProjectDetails } from "../../project/ProjectDetails";
import { ProjectPageData, ProjectsPageStacticData } from "@/types/page-info";
import { fetchHygraphQuery } from "@/utils/fetch-hygraph-query";

interface ProjectProps {
  params: Promise<{
    slug: string;
  }>;
}

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `
  query ProjectQuery() {
    project(where: {slug: "${slug}"}) {
      thumbnail {
        url
      }
      sections {
        title
        image {
          url
        }
      }
      title
      shortDescription
      description {
        raw
        text
      }
      technologies {
        name
      }
      liveProjectUrl
      githubUrl
    }
  }
  `;

  return fetchHygraphQuery(query, 60 * 60);
};

export default async function Project({ params }: ProjectProps) {
  const data = await getProjectDetails((await params).slug);
  const project = data?.project;

  if (!project) {
    return <p>Projeto não encontrado.</p>;
  }

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateStaticParams() {
  const query = `
  query ProjectsSlugsQuery(){
    projects(first: 100){
      slug
    }
  }`;

  const { projects } = await fetchHygraphQuery<ProjectsPageStacticData>(query);

  return projects;
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails((await params).slug);
  const project = data.project;
  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [{ url: project.thumbnail.url, width: 1200, height: 630 }],
    },
  };
}
