import { CmsIcon } from "@/app/components/CmsIcon";
import { KnownTech as IKnownTech } from "@/app/types/projects";

type KnownTechProps = {
  tech: IKnownTech;
};

export const KnownTech = ({ tech }: KnownTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-white flex flex-col gap-2 hover:text-red-600 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CmsIcon icon={tech.iconSvg} />
      </div>
    </div>
  );
};

export default KnownTech;
