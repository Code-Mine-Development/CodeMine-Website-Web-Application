export interface OfferElementBeforePrepare {
 [key: string]: {
   title: string,
   description: string,
   icon: string,
   img?: string,
   movie?: Movie,
   color: string
 }
}

interface Movie{
  movieFrameUrl:string,
  movieUrl:string
}
