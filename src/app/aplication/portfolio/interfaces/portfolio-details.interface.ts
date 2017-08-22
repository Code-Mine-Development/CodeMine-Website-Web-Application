export interface PortfolioDetails {
  detailsTemplate: [{
      section:string,
      title?:string,
      align?:string,
      text?:[text],
      images?:[string],
      image?:string,
      small?:boolean,
      icons?:[icon]
    }];
}

interface text{
  title:string,
  description:string
}

interface icon{
  icon:string,
  description:string
}
