import { generatedPosts } from "@/generated/posts";
import type { Root, RootContent, PhrasingContent, ListItem, TableRow, Image, Text } from "mdast";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date?: string;
  pinned: boolean;
};

export type Post = PostMeta & { content: Root };

export function getAllPosts(): PostMeta[] {
  return generatedPosts.map(({ slug, title, description, date, pinned }) => ({ slug, title, description, date, pinned }));
}

export function getPostBySlug(slug: string): Post | null {
  return generatedPosts.find((post) => post.slug === slug) ?? null;
}

function plainText(nodes: PhrasingContent[] = []): string {
  return nodes.map((node) => {
    if (node.type === "text" || node.type === "inlineCode") return node.value;
    if ("children" in node) return plainText(node.children as PhrasingContent[]);
    return "";
  }).join("");
}

function renderInline(nodes: PhrasingContent[] = []) {
  return nodes.map((node, index) => {
    if (node.type === "text") return (node as Text).value;
    if (node.type === "strong") return <strong key={index}>{renderInline(node.children)}</strong>;
    if (node.type === "emphasis") return <em key={index}>{renderInline(node.children)}</em>;
    if (node.type === "inlineCode") return <code key={index}>{node.value}</code>;
    if (node.type === "link") return <a key={index} href={node.url} target="_blank" rel="noreferrer">{renderInline(node.children)}</a>;
    if (node.type === "image") {
      const image = node as Image;
      return <img key={index} src={image.url} alt={image.alt ?? ""} title={image.title ?? undefined} loading="lazy" />;
    }
    if (node.type === "break") return <br key={index} />;
    return null;
  });
}

function renderListItem(item: ListItem, index: number) {
  return <li key={index}>{renderBlocks(item.children)}</li>;
}

function renderTableRow(row: TableRow, index: number, header = false) {
  const Cell = header ? "th" : "td";
  return <tr key={index}>{row.children.map((cell, i) => <Cell key={i}>{renderInline(cell.children)}</Cell>)}</tr>;
}

export function getPostBodyBlocks(post: Post): RootContent[] {
  const [first, ...rest] = post.content.children;
  if (first?.type === "paragraph" && plainText(first.children).trim() === post.description.trim()) return rest;
  return post.content.children;
}

export function renderBlocks(nodes: RootContent[] = []) {
  return nodes.map((node, index) => {
    if (node.type === "heading") {
      const Heading = `h${node.depth}` as keyof JSX.IntrinsicElements;
      const id = plainText(node.children).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-|-$/g, "");
      return <Heading key={index} id={id}>{renderInline(node.children)}</Heading>;
    }
    if (node.type === "paragraph") return <p key={index}>{renderInline(node.children)}</p>;
    if (node.type === "blockquote") return <blockquote key={index}>{renderBlocks(node.children)}</blockquote>;
    if (node.type === "list") {
      const List = node.ordered ? "ol" : "ul";
      return <List key={index}>{node.children.map(renderListItem)}</List>;
    }
    if (node.type === "code") return <pre key={index}><code>{node.value}</code></pre>;
    if (node.type === "thematicBreak") return <hr key={index} />;
    if (node.type === "table") {
      const [head, ...body] = node.children;
      return <div key={index} className="markdown-table-wrap"><table>{head ? <thead>{renderTableRow(head, 0, true)}</thead> : null}<tbody>{body.map((row, i) => renderTableRow(row, i))}</tbody></table></div>;
    }
    return null;
  });
}
