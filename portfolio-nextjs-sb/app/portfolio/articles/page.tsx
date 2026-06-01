import Link from 'next/link';
import { getAllPosts } from '@/app/lib/posts';

export default function ArticlesPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen py-8 md:py-8 bg-white dark:bg-stone-800">
            <div className="container mx-auto px-2">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block bg-blue-100 dark:bg-stone-700 text-blue-700 dark:text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        Insights & Stories
                    </div>
                    <p className="text-lg text-gray-600 dark:text-stone-300 max-w-2xl mx-auto">
                        Thoughts on hotel trends, guest psychology, career growth,
                        and sustainable hospitality.
                    </p>
                </div>

                {/* Articles Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="p-6">
                                    {/* Date badge */}
                                    <div className="flex items-center justify-between mb-3">
                                        <time className="text-sm text-blue-600 dark:text-amber-400 font-medium">
                                            {post.date}
                                        </time>
                                        <span className="text-xs text-gray-400 dark:text-stone-500">
                                            📖 4 min read
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-stone-100 line-clamp-2">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 dark:text-stone-300 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Read more link */}
                                    <Link
                                        href={`/portfolio/articles/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-blue-600 dark:text-amber-400 font-medium hover:gap-3 transition-all"
                                    >
                                        Read Article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-stone-400 text-lg">
                            No articles published yet. Check back soon!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}