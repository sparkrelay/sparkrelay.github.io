import Link from "next/link";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { highlights, principles, projects, siteMeta } from "../lib/site-content";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <section className="hero shell">
          <div className="hero-orb" />
          <div className="hero-grid">
            <div>
              <span className="eyebrow">
                <Sparkles size={14} />
                Independent open-source organization
              </span>
              <h1>
                Small sparks.
                <br />
                <span className="gradient-text">Connected.</span>
              </h1>
              <p className="hero-copy">
                SparkRelay builds practical software and experiments for the open web. We keep things simple,
                focused, and collaborative.
              </p>
              <div className="actions">
                <Link className="button primary" href="/projects">
                  Explore projects <ArrowUpRight size={16} />
                </Link>
                <a className="button" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>

            <div className="glass mark" aria-hidden="true">
              <div className="mark-inner">
                <Sparkles size={43} strokeWidth={1.7} />
              </div>
            </div>
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <h2>What is SparkRelay?</h2>
            <p>An organization focused on shipping useful, maintainable software with open collaboration.</p>
          </div>
          <div className="grid-3">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="card glass">
                <div className="card-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <h2>Featured projects</h2>
            <p>Early modules that shape the SparkRelay ecosystem.</p>
          </div>
          <div className="grid-3">
            {projects.map(({ name, tag, description, status, icon: Icon }) => (
              <article key={name} className="project glass">
                <div>
                  <span className="project-tag">{tag}</span>
                  <div className="project-title">
                    <Icon size={21} />
                    <h3>{name}</h3>
                  </div>
                  <p>{description}</p>
                </div>
                <span className="project-link">
                  <span className="status-dot" /> {status}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell">
          <div className="quote glass">
            <p>“One spark is small. A relay is how it keeps moving.”</p>
          </div>
        </section>

        <section className="section shell cta-section">
          <div className="cta glass">
            <div>
              <div className="cta-title">Ready to build in the open?</div>
              <p>Browse repositories, follow progress, and contribute to upcoming modules.</p>
            </div>
            <div className="actions">
              <Link className="button primary" href="/about">
                About SparkRelay
              </Link>
              <a className="button" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
                Open GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="section shell stats-grid">
          <article className="stat glass">
            <h3>Open collaboration</h3>
            <p>Roadmaps and implementation decisions stay public so contributors can join earlier.</p>
          </article>
          <article className="stat glass">
            <h3>Modular architecture</h3>
            <p>Shared components and content-driven sections support fast iteration and easier scaling.</p>
          </article>
          <article className="stat glass">
            <h3>Product focus</h3>
            <p>Small, useful releases over oversized launches.</p>
          </article>
        </section>

        <section className="section shell">
          <div className="section-heading">
            <h2>Engineering principles</h2>
          </div>
          <div className="grid-3">
            {principles.map(({ icon: Icon, title, detail }) => (
              <article key={title} className="card glass">
                <div className="card-icon">
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
