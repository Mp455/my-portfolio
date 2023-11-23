"use client";
import Button from "@/app/components/Button";
import { TechBadge } from "@/app/components/TechBadge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HomePageInfo } from "@/app/types/page-info";
import { RichText } from "@/app/components/RichText";
import { CmsIcon } from "@/app/components/CmsIcon";

type HeroSectionProps = {
  homeInfo: HomePageInfo;
};

export const HeroSection = ({ homeInfo }: HeroSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full lg:h-[750px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-red-600">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Marcos Paulo</h2>

          <div className="text-white my-6 text-sm sm:base">
            <RichText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies &&
              homeInfo.technologies.map((tech) => (
                <TechBadge name={tech.name} />
              ))}
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={16} />
            </Button>
            <div className="text-2xl text-red-500 flex items-center h-20 gap-3">
              {homeInfo.socials.map((contact, index) => (
                <a
                  className="hover:text-white transition-colors"
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                >
                  <CmsIcon icon={contact.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={300}
          height={300}
          src={homeInfo.profilePicture.url}
          alt="Foto de Perfil"
          className="w-[350px] h-[350px] lg:w-[400px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
