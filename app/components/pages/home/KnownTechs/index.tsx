import SectionTitle from "../../../SectionTitle";
import KnownTech from "./KnownTech";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaGitSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiStyledcomponents } from "react-icons/si";
export const KnownTechs = () => {
  const MOCK_TECNOLOGIES = [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <IoLogoCss3 />,
      name: "CSS",
    },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <TbBrandNextjs />,
      name: "Next.Js",
    },
    {
      icon: <TbBrandTypescript />,
      name: "Typescript",
    },
    {
      icon: <FaNode />,
      name: "Node.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiStyledcomponents />,
      name: "Styled Components",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <DiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <FaGitSquare />,
      name: "Versionamento GIT",
    },
  ];

  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[50px]">
        {MOCK_TECNOLOGIES.map((tech, index) => (
          <KnownTech key={index} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
