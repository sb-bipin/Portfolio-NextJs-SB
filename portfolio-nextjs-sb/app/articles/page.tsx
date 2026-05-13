import { getAllArticles } from '@/modules/articles/lib/articles';
import Link from 'next/link';
import { Article } from '@/modules/articles/types';

export default async function ArticlesPage() {
    const articles: Article[] = await getAllArticles();

    return (
        <div>
            <h1 className="mb-4">All Articles</h1>
            <div className="row">
                {articles.map((article) => (
                    <div key={article.slug} className="col-md-6 col-lg-4 mb-4">
                        <div className="card h-100">
                            {article.coverImage && (
                                <img
                                    src={article.coverImage}
                                    className="card-img-top"
                                    alt={article.title}
                                />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text text-muted">{article.date}</p>
                                <p className="card-text">{article.excerpt}</p>
                                <Link href={`/articles/${article.slug}`} className="btn btn-primary">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}