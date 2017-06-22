/**
 * Created by kzajac on 22.06.17.
 */

export class Project {

  public title: string;
  public desc: string;
  public mainImg: string;
  public thumbnail: string;
  public tags: Array<Object>;
  public technologies: Array<Object>;



  constructor(title:string,
              desc: string,
              mainImg:string,
              thumbnail:string,
              tags:Array<Object>,
              technologies:Array<Object>,
              )
{
    this.title = title;
    this.desc = desc;
    this.mainImg = mainImg;
    this.thumbnail = thumbnail;
    this.tags = tags;
    this.technologies = technologies;

  }
}
