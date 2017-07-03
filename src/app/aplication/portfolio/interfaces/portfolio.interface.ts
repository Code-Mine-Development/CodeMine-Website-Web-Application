import {Tags} from "../../../shared/interface/tags.interface";
import {Technologies} from "../../../shared/interface/technologies.interface";
import {PortfolioDetails} from "./portfolio-details.interface";

export interface Portfolio extends Tags, Technologies, PortfolioDetails{
    title: string;
    description: string;
    mainImage: string;
    thumbnail: string;
    homePage: boolean;
}
