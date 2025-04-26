import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import PostOfTheDay from "@/components/post_of_the_day";
import PostsGrid from "@/components/posts-grid";
import RecentPosts from "@/components/recent-posts";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, tags}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-left">Value Hub</h1>

      <PostOfTheDay />

      <div className="flex flex-col items-start lg:flex-row gap-12 py-8 border-t border-default-300">
        <div className="lg:flex-[2]">
          <PostsGrid />
        </div>
        <div className="lg:flex-1">
          <RecentPosts />
        </div>
      </div>
    </main>
  );
}
