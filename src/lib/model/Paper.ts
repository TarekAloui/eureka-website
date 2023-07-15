// src/lib/models/Paper.ts
import { Author } from './Author';
import { Tweet } from './Tweet';

export interface Paper {
    id: string;
    title: string;
    authors: Author[];
    abstract: string;
    pub_date: Date;
    updated_date: Date;
    categories: string[];
    links: string[];
    comment: string;
    journal_ref: string;
    trendiness_score: number;
    relatedTweets: Tweet[]; // added this line
}
