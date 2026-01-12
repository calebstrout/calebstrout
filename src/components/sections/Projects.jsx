import { projects, tagMeta } from '../../data/projects';
import { RevealOnScroll } from '../RevealOnScroll';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <RevealOnScroll>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-xl overflow-hidden shadow-xs card-hover border border-white/10 hover:border-white/30 hover:-translate-y-1 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => {
                      const meta = tagMeta[tag] || { color: '#6b7280' };
                      const Icon = meta.icon;
                      const color = meta.color || '#6b7280';
                      return (
                        <span
                          key={tag}
                          className="flex items-center gap-2 py-1 px-3 rounded-full text-sm transition hover:shadow-[0_2px_8px_var(--shadow-color)]"
                          style={{
                            backgroundColor: `${color}20`,
                            color: color,
                            '--shadow-color': `${color}66`,
                          }}
                        >
                          {Icon ? <Icon className="w-4 h-4" /> : null}
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <Link
                      to={`/projects/${project.slug || project.id}`}
                      className="text-foreground/60 hover:text-primary"
                    >
                      <ArrowRight />
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.infoUrl && project.infoUrl !== '#' ? (
                        <a
                          href={project.infoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
