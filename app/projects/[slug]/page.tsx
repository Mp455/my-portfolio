import { ProjectDetails } from "@/app/components/pages/project/ProjectDetails";
import { ProjectSections } from "@/app/components/pages/project/ProjectSections";
import {
  ProjectPageData,
  ProjectsPageStacticData,
} from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-hygraph-query";
import { Metadata } from "next";

type ProjectProps = {
  params: {
    slug: string;
  };
};

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

export default async function Project({ params: { slug } }: ProjectProps) {
  const data = await getProjectDetails(slug);
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
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug);
  const project = data.project;
  return {
    title: project.title,
    description: project.description.text,
    openGraph: {
      images: [{ url: project.thumbnail.url, width: 1200, height: 630 }],
    },
  };
}
