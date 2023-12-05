"use client";
import { motion } from "framer-motion";
import { Link } from "../../../Link";
import SectionTitle from "../../../SectionTitle";
import { HiArrowNarrowLeft } from "react-icons/hi";
export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="Projetos"
        title="Meus projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-white text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui destaquei meus projetos desenvolvidos. Navegue e explore os
          projetos crirados, as tecnologias utilizadas e as funcionalidades
          implementadas à vontade.
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  );
};
