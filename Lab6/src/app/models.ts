export interface Album{
    userId: number;
    id: number;
    title: string;
    isDeleted: boolean;
}

export interface Photo{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

