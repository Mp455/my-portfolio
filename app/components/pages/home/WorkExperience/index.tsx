import SectionTitle from "@/app/components/SectionTitle";
import ExperienceItem from "./ExperienceItem";

export const WorkExperience = () => {
  const MOCK_EXPERIENCES = [
    {
      image: "https://cr2.co/wp-content/uploads/Logo-CR2-Site.png",
      url: "https://cr2.co/",
      name: "CR2 Transparência Pública",
      title: "Estagiário de TI",
      duration: "mar 2023 - ago 2023 - 6 meses",
      description:
        "Ficava responsável por dar manutenção aos sites dos clientes atualizando os portais de Transparência Pública",
      technologies: ["HTML", "CSS", "PHP", "WordPress", "MySQL"],
    },
    {
      image:
        "https://wkncdn.com/newx/assets/build/img/logos/mobile_logo.16f3a81b5.svg",
      url: "https://www.workana.com/pt",
      name: "Workana Profissional",
      title: "Freelancer",
      duration: "ago 2023 - o momento",
      description:
        "Criação de Landing pages, desenvolvimento de telas responsivas, autenticação com Google Provider, NextAuth",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "TailwindCSS",
        "Styled Components",
        "Next.Js",
        "React",
        "PostgresSQL",
      ],
    },
  ];
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="Experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Estou sempre disponível para novos desafios e projetos. Sempre com
          entusiamos para criar soluções incríveis e inovadoras para sua
          empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {MOCK_EXPERIENCES.map((experience, index) => (
          <ExperienceItem experience={experience} key={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
