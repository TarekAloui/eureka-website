export interface Author {
    name: string;
    affiliation: string; // the institution the author is currently affiliated with
    hIndex: number; // the author's h-index
    i10Index: number; // the author's i10-index
    citations: number; // total number of citations
    interests: string[]; // areas of interest/research
    profileUrl: string; // the URL of the author's Google Scholar profile
}