import KnownTechs from "./components/pages/home/KnownTechs";
import HeroSection from "./components/pages/home/HeroSection";
import { HighlightProjects } from "./components/pages/home/HighlightedProjects";
import WorkExperience from "./components/pages/home/WorkExperience";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";
import { HomePageData } from "./types/page-info";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction {
            raw
          }
      technologies {
          name
          }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        name
        iconSvg
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
    workExperiences {
      companyLogo {
          url
        }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      technologies {
        name
      }
    }
  }
`;
  return fetchHygraphQuery(query, 60 * 60 * 24);
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
