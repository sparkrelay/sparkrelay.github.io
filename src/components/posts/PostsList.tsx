"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Pin, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/posts";

export function PostsList({ posts }: { posts: PostMeta[] }) {
  const [keyword, setKeyword] = useState("");
  const fuse = useMemo(() => new Fuse(posts, { keys: ["title", "description", "date"], threshold: 0.35 }), [posts]);
  const result = keyword ? fuse.search(keyword).map(({ item }) => item) : posts;

  return (
    <main className="page-main">
      <div className="shell">
        <section className="posts-hero">
          <span className="eyebrow"><Search size={14} /> SparkRelay Posts</span>
          <h1>Notes, updates,<br /><span className="gradient-text">and sparks.</span></h1>
          <p>Project updates, engineering notes, experiments, and ideas from SparkRelay.</p>
          <div className="post-search glass">
            <Search size={17} />
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search posts..." />
            {keyword ? <button onClick={() => setKeyword("")} aria-label="Clear search"><X size={16} /></button> : null}
          </div>
        </section>

        <section className="posts-list" aria-label="Posts">
          <AnimatePresence mode="popLayout">
            {result.map((post, index) => (
              <motion.article key={post.slug} layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ delay: index * 0.035, duration: 0.35 }} className="post-card glass">
                <Link href={`/posts/${post.slug}`}>
                  <div className="post-card-top">
                    <div>
                      <div className="post-title-row">
                        {post.pinned ? <span className="post-pin"><Pin size={13} /> Pinned</span> : null}
                        <h2>{post.title}</h2>
                      </div>
                      <p>{post.description}</p>
                    </div>
                    {post.date ? <span className="post-date"><CalendarDays size={14} /> {post.date}</span> : null}
                  </div>
                  <span className="post-read">Read post <span>→</span></span>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
          {!result.length ? <div className="empty-posts glass">No posts found.</div> : null}
        </section>
      </div>
    </main>
  );
}
