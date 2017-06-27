import {Tags} from "./tags.interface";
import {Technologies} from "./technologies.interface";
export interface Portfolio {
  title: string;
  description: string;
  mainImage: string;
  thumbnail: string;
  tags: Tags;
  technologies: Technologies[];
  homePage: boolean;
}
