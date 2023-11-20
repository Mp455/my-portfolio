import { ReactNode } from "react";

type KnowTechProps = {
  tech: {
    icon: ReactNode;
    name: string;
  };
};

export const KnowTech = ({ tech }: KnowTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-white flex flex-col gap-2 hover:text-red-600 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
    </div>
  );
};

export default KnowTech;
