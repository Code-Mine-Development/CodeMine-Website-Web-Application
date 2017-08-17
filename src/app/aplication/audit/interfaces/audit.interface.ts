export interface Audit {
    title: string;
    image: string;
    description: string;
    items:[{
      task:string,
      benefit:string
    }]
}
