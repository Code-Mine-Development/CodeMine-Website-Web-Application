export interface OfferElement {
  title: string,
  description: string,
  icon: {
    url: string,
    svgBody: string,
    viewBox: string
  },
  color: string,
  img?: string,
  movie?: Movie,
  prevUrl?: string,
  nextUrl?: string
}

interface Movie {
  movieFrameUrl: string,
  movieUrl: string
}
