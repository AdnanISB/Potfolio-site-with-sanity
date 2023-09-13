import { PortableTextBlock } from "sanity";


export type JobType = {
    _id: string;
    name: string;
    jobTitle: string;
    logo: string;
    url: string;
    description: string;
    startDate: Date;
    endDate: Date;
  };

  export type ProjectType = {
    _id: string;
    name: string;
    slug: string;
    tagline: string;
    projectUrl: string;
    logo: string;
    coverImage: {
      alt: string | null;
      image: string;
    };
    description: PortableTextBlock[];
  };