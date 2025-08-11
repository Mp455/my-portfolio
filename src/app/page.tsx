import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import { HomePageData } from "../types/page-info";
import HeroSection from "./home/HeroSection";
import KnownTechs from "./home/KnownTechs";
import { HighlightProjects } from "./home/HighlightedProjects";
import WorkExperience from "./home/WorkExperience";
import Button from "./components/Button";

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
  return fetchHygraphQuery(query, 60 * 60);
};

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData();

  return (
    <div className="mx-4 md:mx-0">
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighlightProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </div>
  );
}
