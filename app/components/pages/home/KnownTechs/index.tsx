import SectionTitle from "../../../SectionTitle";
import KnownTech from "./KnownTech";
import { KnownTech as IKnownTech } from "@/app/types/projects";
type KnownTechProps = {
  techs: IKnownTech[];
};
export const KnownTechs = ({ techs }: KnownTechProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[50px]">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
