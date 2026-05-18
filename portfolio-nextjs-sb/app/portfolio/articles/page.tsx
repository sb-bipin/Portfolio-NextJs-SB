// src/app/articles/page.tsx
import { getAllArticles } from '@/modules/articles/lib/articles';
import Link from 'next/link';

export const metadata = {
    title: 'Articles | Bipin Paudel',
    description: 'Read my latest articles on web development, Next.js, and more.',
};

export default async function ArticlesPage() {
    const articles = await getAllArticles();

    if (!articles.length) {
        return (
            <div className="container py-5 text-center">
                <h1>No articles yet</h1>
                <p>Check back soon for new content.</p>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="mb-4">All Articles</h1>
            <div className="row g-4">
                {articles.map((article) => (
                    <div key={article.slug} className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            {article.coverImage && (
                                <img
                                    src={article.coverImage}
                                    className="card-img-top"
                                    alt={article.title}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {new Date(article.date).toLocaleDateString()}
                                </h6>
                                <p className="card-text">{article.excerpt}</p>
                                {/* <Link href={`/articles/${article.slug}`} className="btn btn-primary">
                                    Read more →
                                </Link> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}