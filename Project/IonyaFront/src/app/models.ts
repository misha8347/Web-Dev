export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface Location{
  id: number;
  name: string;
  city: string;
  address: string;
  image: string;
  url: string;
}

export interface Club{
  id: number;
  name: string;
  description: string;
  logo: string;
  likes: number;
  dislikes: number;
}

export interface Profile{
  id: number;
  user: User;
  club: Club;
}

export interface News{
  id: number;
  title: string;
  text: string;
  club: Club;
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
  organizer: Club;
  location: Location;
  likes: number;
  dislikes: number;
}

export interface Ticket {
  id: number;
  event: number;
  user: number;
  ticket_type: string;
  standard_cost: number;
}

export interface AuthToken {
  token: string;
}
