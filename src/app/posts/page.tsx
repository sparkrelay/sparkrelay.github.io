import { PostsList } from "@/components/posts/PostsList";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllPosts } from "@/lib/posts";

export default function PostsPage() {
  return <><SiteNav /><PostsList posts={getAllPosts()} /><SiteFooter /></>;
}
