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
  movie?: movie,
  prevUrl?: string,
  nextUrl?: string
}

interface movie{
  movieFrameUrl: string,
  movieUrl: string
}
