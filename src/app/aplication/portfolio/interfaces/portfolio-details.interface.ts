export interface PortfolioDetails {
  detailsTemplate: [{
      section:string,
      title?:string,
      align?:string,
      text?:[text],
      images?:[string],
      image?:string,
      small?:boolean
    }];
}

interface text{
  title:string,
  description:string
}
