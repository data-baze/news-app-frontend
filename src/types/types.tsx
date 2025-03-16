export interface News {
  _id: string;
  title: string;
  text: string;
  images: string[];
  tags: string[];
  likes: number;
  views: number;
  createdAt: string;
}
