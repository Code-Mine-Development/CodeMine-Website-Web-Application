export interface WeCreate {
  title: string;
  features: Array<FeaturesEntity>;
}

interface FeaturesEntity {
  name: string;
  image: string;
  description: string;
}
