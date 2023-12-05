export type NoteMetaData = {
    title: string;
    firstConsumed: Date;
    released: Date;
    tags: string[];
    type: "Movie" | "Game" | "Show" | "Book";
    rating: string;
    coverURL: string;
    noteSummary: string;
    director: string;
    starring: string[];
    cinematography: string;
    slug: string;
    developer: string;
    publisher: string;
    platform: string;
}

