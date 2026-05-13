import { getArticleBySlug, getAllArticles } from '@/modules/articles/lib/articles';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Generate static paths for all articles at build time (excellent for SEO)
export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

// Dynamic metadata for each article (improves SEO)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const article = await getArticleBySlug(params.slug);
    if (!article) return {};
    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.date,
        },
    };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);
    if (!article) notFound();

    return (
        <article className="blog-post">
            <h1 className="mb-3">{article.title}</h1>
            <p className="text-muted mb-4">{article.date}</p>
            {article.coverImage && (
                <img src={article.coverImage} className="img-fluid mb-4" alt="" />
            )}
            <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: article.contentHtml }}
            />
        </article>
    );
}