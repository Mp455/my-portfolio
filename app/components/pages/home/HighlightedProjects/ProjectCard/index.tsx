import { Link } from "@/app/components/Link";
import { TechBadge } from "@/app/components/TechBadge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  thumbnailAlt: string;
  description: string;
};

export const ProjectCard = ({
  title,
  imageSrc,
  thumbnailAlt,
  description,
}: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={405}
          src={imageSrc}
          alt={thumbnailAlt}
          className="w-full h-[200px] sm:[300px] lg-w-[450px] lg:min-h-full object-cover rounded-lg "
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {title}
        </h3>
        <p className="text-gray-400 my-6">{description}</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-[350px]">
          <TechBadge name="Next.js" />
        </div>
        <Link href={"/projetcs/book-wise"}>
          Ver Projeto <HiArrowNarrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
