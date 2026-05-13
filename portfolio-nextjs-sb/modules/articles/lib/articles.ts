import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Article } from '../types';

const articlesDirectory = path.join(process.cwd(), 'src/modules/articles/content');

export async function getAllArticles(): Promise<Article[]> {
    const fileNames = fs.readdirSync(articlesDirectory);
    const allArticles = await Promise.all(
        fileNames.map(async (fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(articlesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            const processedContent = await remark().use(html).process(content);
            const contentHtml = processedContent.toString();

            return {
                slug,
                title: data.title,
                date: data.date,
                excerpt: data.excerpt || '',
                contentHtml,
                coverImage: data.coverImage || '',
            } as Article;
        })
    );
    // Sort by date descending
    return allArticles.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
    try {
        const fullPath = path.join(articlesDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();
        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt || '',
            contentHtml,
            coverImage: data.coverImage || '',
        };
    } catch (error) {
        return null;
    }
}