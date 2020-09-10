export interface IProject extends ITimeStamped {
  pk: number;
  description: string;
  github: string;
  url: string;
  featured: boolean;
  date: Date;
  image: IImage;
}

export interface IImage {
  pk: number;
  image: string;
}

export interface IJob extends ITimeStamped {
  pk: number;
  company: string;
  position: string;
  date_start: Date;
  date_end: Date;
}

export interface ISkill {
  pk: number;
  name: string;
  icon: string;
}

export interface ISocial extends ISkill {}

export interface ICategory extends ITimeStamped {
  pk: number;
  name: string;
}

export interface IBlogPost extends ITimeStamped {
  pk: number;
  content: string;
  slug: string;
  desc: string;
  date: Date;
  category: number;
  categoryView?: ICategory;
  image: IImage;
}

export interface ITimeStamped {
  created_at: Date;
  updated_at: Date;
}
