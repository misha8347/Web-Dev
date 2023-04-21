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
