import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllPosts, getPostBodyBlocks, getPostBySlug, renderBlocks } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);
  if (!post) return {};
  return { title: post.title, description: post.description, openGraph: { title: post.title, description: post.description, type: "article" } };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();

  return (
    <>
      <SiteNav />
      <main className="page-main post-page">
        <div className="shell">
          <article className="post-article glass">
            <Link className="post-back" href="/posts"><ArrowLeft size={16} /> All posts</Link>
            <header className="post-header">
              {post.date ? <span className="post-date"><CalendarDays size={14} /> {post.date}</span> : null}
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </header>
            <div className="markdown-body">{renderBlocks(getPostBodyBlocks(post))}</div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
