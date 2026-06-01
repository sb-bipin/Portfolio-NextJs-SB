import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'app/content/articles');

export interface PostData {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    contentHtml: string;
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(articlesDirectory);
    return fileNames.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
    }));
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        contentHtml,
    };
}

export function getAllPosts(): PostData[] {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allPosts = fileNames.map((fileName) => {
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return {
            slug: fileName.replace(/\.md$/, ''),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            contentHtml: '',
        };
    });
    return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}