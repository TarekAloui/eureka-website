export interface Tweet {
    url: string;
    user_name: string;
    retweets: number;
    likes: number;
    text: string; // the tweet's text
    date: Date; // the date the tweet was published
}