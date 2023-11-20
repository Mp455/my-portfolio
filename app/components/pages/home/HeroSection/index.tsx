import { TechBadge } from "@/app/components/TechBadge";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="w-full h-[750px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
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
          <div>Contato:</div>
        </div>
        <Image
          width={300}
          height={300}
          src="/images/profile.png"
          alt="Foto de Perfil"
        />
      </div>
    </section>
  );
};

export default HeroSection;
