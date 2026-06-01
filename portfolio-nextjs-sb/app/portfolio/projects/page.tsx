import { getAllProjects } from '@/app/data/projects';
import ProjectCard from '@/app/components/ProjectCard';

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className="min-h-screen py-8 md:py-8 bg-white dark:bg-stone-800">
            <div className="container mx-auto px-2">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block bg-blue-100 dark:bg-stone-700 text-blue-700 dark:text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                        My Work
                    </div>

                    <p className="text-lg text-gray-600 dark:text-stone-300 max-w-2xl mx-auto">
                        A collection of academic, personal, and professional projects
                        that showcase my skills in hotel management and hospitality.
                    </p>
                </div>

                {/* Projects Grid */}
                {projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-stone-400 text-lg">No projects found. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}