export type Article = {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    contentHtml: string;
    coverImage?: string;
};