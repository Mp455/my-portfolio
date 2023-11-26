"use client";
import { motion } from "framer-motion";
import SectionTitle from "../../../SectionTitle";
import KnownTech from "./KnownTech";
import { KnownTech as IKnownTech } from "@/app/types/projects";
type KnownTechProps = {
  techs: IKnownTech[];
};
export const KnownTechs = ({ techs }: KnownTechProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(265px,1fr))] gap-3 mt-[50px]">
        {techs?.map((tech, i) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech key={tech.name} tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
