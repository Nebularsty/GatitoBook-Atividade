export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  descreption: string;
  allowComments: string;
  likes: number;
  comments: number;
  userId: number;
}

export type Animais = Array<Animal>;
