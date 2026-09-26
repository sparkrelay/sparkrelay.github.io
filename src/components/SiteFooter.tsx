import { siteMeta } from "../lib/site-content";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} {siteMeta.name}</span>
        <span>{siteMeta.tagline}</span>
      </div>
    </footer>
  );
}
