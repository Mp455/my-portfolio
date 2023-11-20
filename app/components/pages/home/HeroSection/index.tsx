import Button from "@/app/components/Button";
import { TechBadge } from "@/app/components/TechBadge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
const MOCK_CONTACTS = [
  { url: "https://github.com/Mp455", icon: <TbBrandGithub /> },
  {
    url: "https://www.linkedin.com/in/marcoss-paulo/",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCbRHtPPhdcbkmpVGCbGGksLcssSXfdTLQvXFhJSPQKfKslxNpTGSpjvPVcFhWdtBfDrhV",
    icon: <SiGmail />,
  },
];
export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[750px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-red-600">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Marcos Paulo</h2>

          <p className="text-white my-6 text-sm sm:base">
            Olá, meu nome é Marcos Paulo, sou desenvolvedor trainee front-end
            que se arrisca no backend as vezes. Meu objetivo é criação de
            interfaces de usuário funcionais. Estou sempre aberto a novas
            oportunidades e desafios.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="Next.js" />
            ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max">
              Entre em contato
              <HiArrowNarrowRight size={16} />
            </Button>
            <div className="text-2xl text-red-500 flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  className="hover:text-white transition-colors"
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={300}
          height={300}
          src="/images/profile.png"
          alt="Foto de Perfil"
          className="w-[350px] h-[350px] lg:w-[400px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
