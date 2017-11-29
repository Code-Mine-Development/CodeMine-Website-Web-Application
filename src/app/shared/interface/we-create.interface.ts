export interface WeCreate {
  title: string;
  features: Array<FeaturesEntity>;
}

interface FeaturesEntity {
  name: string;
  image: string;
  mobile: string;
  description: string;
  width: string;
  left: string;
}
