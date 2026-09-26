import { Github } from "lucide-react";
import { SiteNav } from "../../components/SiteNav";
import { SiteFooter } from "../../components/SiteFooter";
import { projects, siteMeta } from "../../lib/site-content";

export default function ProjectsPage() {
  return (
    <>
      <SiteNav />
      <main className="shell page-main">
        <section className="page-hero">
          <h1>Projects</h1>
          <p>Focused modules that keep SparkRelay practical, open, and composable.</p>
        </section>

        <section className="grid-3">
          {projects.map(({ icon: Icon, name, description, status, tag }) => (
            <article className="project glass" key={name}>
              <div>
                <span className="project-tag">{tag}</span>
                <div className="project-title">
                  <Icon size={21} />
                  <h3>{name}</h3>
                </div>
                <p>{description}</p>
              </div>
              <div className="project-actions">
                <span className="project-link">
                  <span className="status-dot" /> {status}
                </span>
                <a href={siteMeta.githubUrl} target="_blank" rel="noreferrer" className="button">
                  <Github size={15} /> Repository
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
