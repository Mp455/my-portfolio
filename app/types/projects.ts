import type { RichTextContent } from "@graphcms/rich-text-types";

export type KnownTech = {
  iconSvg: string;
  name: string;
};

export type ProjectSection = {
  title: string;
  image: {
    url: string;
  };
};

export type Project = {
  slug: string;
  thumbnail: {
    url: string;
  };
  title: string;
  shortDescription: string;
  technologies: KnownTech[];
  sections: ProjectSection[];
  description: {
    raw: RichTextContent;
    text: string;
  };
  githubUrl?: string;
  liveProjectUrl?: string;
};
