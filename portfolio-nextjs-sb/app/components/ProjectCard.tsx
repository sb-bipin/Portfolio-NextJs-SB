import Link from 'next/link';
import { Project } from '@/app/data/projects';

export default function ProjectCard({ id, title, description, image, tags, link }: Project) {
    return (
        <div className="bg-white dark:bg-stone-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-stone-100">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-stone-300 mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="bg-blue-50 dark:bg-stone-600 text-blue-700 dark:text-amber-300 text-xs px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                {/* <Link
                    href={link}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-amber-400 font-medium hover:gap-3 transition-all"
                >
                    View Project →
                </Link> */}
            </div>
        </div>
    );
}