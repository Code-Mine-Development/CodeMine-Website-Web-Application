import {Tags} from '../../../shared/interface/tags.interface';
import {Technologies} from '../../../shared/interface/technologies.interface';
import {PortfolioDetails} from './portfolio-details.interface';

export interface Portfolio extends Tags, PortfolioDetails {
    link: string;
    title: string;
    shortDescription: string;
    subTitle: string;
    description: string;
    mainImage: string;
    thumbnail: string;
    technologies: [string];
    tools: [string];
    homePage: boolean;
}
