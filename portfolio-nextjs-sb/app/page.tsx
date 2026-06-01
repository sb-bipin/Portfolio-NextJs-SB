import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { getAllPosts } from '@/app/lib/posts';
import ProjectCard from '@/app/components/ProjectCard';
import { getFeaturedProjects } from '@/app/data/projects';
import { services } from '@/app/data/services';

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const latestArticles = getAllPosts().slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-stone-800 dark:via-stone-800 dark:to-stone-700 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block bg-blue-100 dark:bg-stone-700 text-blue-700 dark:text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                ✨ Future Hotelier
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <br /> <span className="text-blue-600 dark:text-amber-400">Bipana Poudel</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-stone-300 mb-6 max-w-2xl mx-auto lg:mx-0">
                Hotel Management Student & Hospitality Enthusiast. I turn guest
                moments into memorable experiences and operations into seamless workflows.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/portfolio/contact" className="bg-blue-600 dark:bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-amber-700 transition shadow-md">
                  Let's Connect
                </Link>
              </div>
              <div className="flex gap-5 justify-center lg:justify-start mt-8">
                <a href="https://linkedin.com/bipana-poudel" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-amber-400 transition"><FaLinkedin size={28} /></a>
                <a href="mailto:bipanapoudel404@example.com" className="text-gray-600 dark:text-stone-400 hover:text-blue-600 dark:hover:text-amber-400 transition"><FaEnvelope size={28} /></a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-stone-600 dark:to-amber-700 rounded-full blur-3xl opacity-30 -z-10"></div>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-stone-700 dark:to-stone-600 rounded-full p-6 shadow-xl">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-white dark:bg-stone-800 rounded-full overflow-hidden shadow-inner">
                    <img src="/images/profile1.jpg" alt="Bipana Poudel" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-12 text-white dark:text-stone-800" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section >

      {/* Core Competencies */}
      <section className="py-20 bg-white dark:bg-stone-800" >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-stone-100">My Core Competencies</h2>
            <p className="text-gray-600 dark:text-stone-300">Blending operational knowledge with a genuine passion for hospitality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl p-6 text-center hover:shadow-lg transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-stone-600 rounded-full mb-4">
                  <Icon className="text-blue-600 dark:text-amber-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-stone-200">{title}</h3>
                <p className="text-gray-600 dark:text-stone-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-stone-800/50" >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-stone-100">Featured Projects</h2>
            <p className="text-gray-600 dark:text-stone-300">Academic and personal projects that showcase my hotel industry skills.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/portfolio/projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      {
        latestArticles.length > 0 && (
          <section className="py-20 bg-white dark:bg-stone-800">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-stone-100">Latest Insights</h2>
                <p className="text-gray-600 dark:text-stone-300">Thoughts on hotel trends, guest psychology, and career growth.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {latestArticles.map((post) => (
                  <div key={post.slug} className="bg-gray-50 dark:bg-stone-700/50 rounded-2xl p-6 hover:shadow-md transition">
                    <p className="text-sm text-blue-600 dark:text-amber-400 mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-stone-200">{post.title}</h3>
                    <p className="text-gray-600 dark:text-stone-300 mb-4">{post.excerpt}</p>
                    {/* <Link href={`/portfolio/articles/${post.slug}`} className="text-blue-600 dark:text-amber-400 font-medium hover:underline">
                      Read more →
                    </Link> */}
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Link href="/portfolio/articles" className="inline-flex items-center gap-2 text-blue-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all">
                  Browse All Articles →
                </Link>
              </div>
            </div>
          </section>
        )
      }

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 dark:bg-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Open to Internships & Collaborations</h2>
          <p className="text-blue-100 dark:text-amber-100 text-lg max-w-2xl mx-auto mb-8">
            Looking for a motivated hotel student who brings energy, empathy, and a data‑informed mindset. Let’s talk!
          </p>
          <Link href="/portfolio/contact" className="inline-block bg-white dark:bg-stone-800 text-blue-600 dark:text-amber-400 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-stone-700 transition shadow-lg">
            Get In Touch
          </Link>
        </div>
      </section>
    </div >
  );
}