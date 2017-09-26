import {Tags} from '../../../shared/interface/tags.interface';
import {PortfolioDetails} from './portfolio-details.interface';

export interface Portfolio extends Tags, PortfolioDetails {
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
