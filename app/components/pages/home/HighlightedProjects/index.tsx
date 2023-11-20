import HorizontalDivider from "@/app/components/Divider/horizontal";
import SectionTitle from "@/app/components/SectionTitle";

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="Destaques" title="Projetos em Destaque" />
      <HorizontalDivider className="mb-16" />
    </section>
  );
};

export default HighlightedProjects;
