import SectionTitle from "../../SectionTitle";
import KnowTech from "./KnowTech";
import { TbBrandNextjs } from "react-icons/tb";

export const KnowTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[50px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnowTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Next.Js",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default KnowTechs;
