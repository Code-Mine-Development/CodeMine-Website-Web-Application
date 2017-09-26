export interface Portfolio {
    link: string;
    title: string;
    shortDescription?: string;
    subTitle: string;
    description: string;
    mainImage: {
      big: string;
      small: string;
    };
    thumbnail: string;
    technologies: string[];
    tools: string[];
    homePage: boolean;
}
