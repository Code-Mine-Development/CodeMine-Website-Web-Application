export interface  PortfolioDetails {
  detailsTemplate: {
    section: string,
    title?: string,
    align?: string,
    text?: Text[],
    images?: string[] | Images[],
    image?: string,
    small?: boolean,
    icons?: Icon[],
    video?: Video,
  }[];
}

interface Text {
  title: string,
  description: string
}

interface Icon {
  icon: string,
  description: string
}


interface Video {
  image: string,
  videoUrl: string
}

interface Images {
  url: string,
  title: string
}
