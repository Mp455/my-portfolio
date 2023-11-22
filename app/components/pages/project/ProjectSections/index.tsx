import Image from "next/image";

const sections = [{ title: "Tela Principal", image: "/images/thumb-fsw.png" }];

export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col md:gap-32 ">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sesão: ${section.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};