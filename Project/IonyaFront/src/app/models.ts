export interface News{
  id: number;
  title: string;
  text: string;
  image: string;
  likes: number;
  dislikes: number;
}
  
export interface Event{
  id: number;
  name: string;
  description: string;
  image: string;
  date_time: Date;
  organizer: string;
  likes: number;
  dislikes: number;
}

export interface Club{
  id: number;
  name: string;
  description: string;
  logo: string;
  likes: number;
  dislikes: number;
}

export interface Location{
  id: number;
  name: string;
  city: string;
  address: string;
  image: string;
}

export interface AuthToken {
  token: string;
}
