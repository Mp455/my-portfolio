import KnowTechs from "./components/pages/KnowTechs";
import HeroSection from "./components/pages/home/HeroSection";
import HighlightedProjects from "./components/pages/home/HighlightedProjects";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
    </>
  );
}
