export interface Languages {
  title: string;
  languages: Array<LanguagesEntity>;
}

interface LanguagesEntity {
  image: string;
  name: string;
}
