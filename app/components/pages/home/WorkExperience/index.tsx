import SectionTitle from "@/app/components/SectionTitle";
import ExperienceItem from "./ExperienceItem";
import { workExperience as iWorkExperience } from "@/app/types/work-experiences";

type workExperienceProps = {
  experiences: iWorkExperience[];
};

export const WorkExperience = ({ experiences }: workExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="Experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-500 mt-6">
          Estou sempre disponível para novos desafios e projetos. Sempre com
          entusiamos para criar soluções incríveis e inovadoras para sua
          empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem experience={experience} key={experience.startDate} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
