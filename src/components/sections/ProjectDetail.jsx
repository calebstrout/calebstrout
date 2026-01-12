import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';
import Carousel from '../Carousel';
import { RevealOnScroll } from '../RevealOnScroll';

export const ProjectDetail = () => {
  const params = useParams();
  const slug = params.slug || params.id;
  const project =
    projects.find((p) => p.slug === slug) ||
    projects.find((p) => p.id === parseInt(slug, 10));

  if (!project) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="mb-6">
            We couldn't find the project you're looking for.
          </p>
          <Link to="/" className="text-primary underline">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4">
      <RevealOnScroll>
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <Link
              to="/#projects"
              className="text-foreground/80 hover:text-primary"
            >
              ← Back
            </Link>
          </div>

          <div className="bg-card rounded-xl overflow-hidden shadow-xs border border-white/10 p-6">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

            {/* Carousel gallery (optional) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-6">
                <Carousel
                  images={project.gallery}
                  altPrefix={project.title}
                  autoPlay={true}
                  autoPlayInterval={8000}
                />
              </div>
            )}

            {/* Flexible sections: paragraph, image, list */}
            {project.sections && project.sections.length > 0 && (
              <div className="prose max-w-none mb-6 text-gray-200">
                {project.sections.map((s, i) => {
                  if (s.type === 'paragraph') {
                    return (
                      <p key={i} className="mb-4">
                        {s.text}
                      </p>
                    );
                  }

                  if (s.type === 'image') {
                    return (
                      <figure key={i} className="mb-4">
                        <img
                          src={s.src}
                          alt={s.caption || project.title}
                          className="w-full rounded-md"
                          loading="lazy"
                        />
                        {s.caption && (
                          <figcaption className="text-sm text-gray-400 mt-2">
                            {s.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }

                  // gallery: render a carousel for a list of images/captions
                  if (s.type === 'gallery') {
                    const images = s.items || s.gallery || s.images || [];
                    return (
                      <div key={i} className="mb-6">
                        <Carousel
                          images={images}
                          altPrefix={project.title}
                          autoPlay={s.autoPlay ?? false}
                          autoPlayInterval={s.autoPlayInterval ?? 8000}
                        />
                      </div>
                    );
                  }

                  if (s.type === 'list') {
                    return (
                      <ul key={i} className="list-disc pl-5 mb-4">
                        {s.items.map((it, j) => (
                          <li key={j}>{it}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (s.type === 'subtitle') {
                    return (
                      <h2 key={i} className="text-2xl font-semibold mt-8 mb-4">
                        {s.text}
                      </h2>
                    );
                  }

                  return null;
                })}
              </div>
            )}

            <div className="flex items-center gap-4">
              {project.demos?.map((demo, idx) =>
                demo.url && demo.url !== '#' ? (
                  <a
                    key={idx}
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary"
                  >
                    <ExternalLink />
                    {demo.name || 'Demo'}
                  </a>
                ) : null
              )}

              {project.githubUrl && project.githubUrl !== '#' ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary"
                >
                  <Github /> Source Code
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default ProjectDetail;
