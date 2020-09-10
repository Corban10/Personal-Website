export interface IProject extends ITimeStamped {
  id: number;
  description: string;
  github: string;
  url: string;
  featured: boolean;
  date: Date;
  images: [IImage];
}

export interface IImage {
  id: number;
  image: string;
}

export interface IJob extends ITimeStamped {
  id: number;
  company: string;
  position: string;
  date_start: Date;
  date_end: Date;
}

export interface ISkill {
  id: number;
  name: string;
  icon: string;
}

export interface ISocial extends ISkill {}

export interface ICategory extends ITimeStamped {
  id: number;
  name: string;
}

export interface IBlogPost extends ITimeStamped {
  id: number;
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
