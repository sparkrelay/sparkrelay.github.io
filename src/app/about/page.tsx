import { SiteNav } from "../../components/SiteNav";
import { SiteFooter } from "../../components/SiteFooter";
import { highlights, principles } from "../../lib/site-content";

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="shell page-main">
        <section className="page-hero">
          <h1>About SparkRelay</h1>
          <p>
            SparkRelay is a small engineering organization focused on turning ideas into useful open-source
            software.
          </p>
        </section>

        <section className="section compact">
          <div className="section-heading">
            <h2>How we work</h2>
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

        <section className="section compact">
          <div className="section-heading">
            <h2>What we optimize for</h2>
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
