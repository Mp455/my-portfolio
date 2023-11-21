import { TechBadge } from "@/app/components/TechBadge";
import Image from "next/image";

type ExperienceItemProps = {
  experience: {
    image: string;
    url: string;
    name: string;
    title: string;
    duration: string;
    description: string;
    technologies: string[];
  };
};

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={experience.image}
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo da Empresa"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.url}
            target="_blank"
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            {experience.name}
          </a>
          <h4 className="text-gray-300">{experience.title}</h4>
          <span className="text-gray-500">{experience.duration}</span>
          <p className="text-gray-400">{experience.description}</p>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
            Competências
          </p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            {experience.technologies.map((tech, index) => (
              <TechBadge name={tech} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
