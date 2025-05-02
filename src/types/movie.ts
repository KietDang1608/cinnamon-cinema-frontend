export interface Movie {
    id: number;
    title: string;
    description: string;
    genres: string[];
    duration: string; // in minutes
    releaseDate: string
    imageUrl: string;
}