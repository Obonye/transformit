// components/recent-posts.tsx
import Link from "next/link";
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const RECENT_POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc)[0...5]{
  _id,
  title,
  slug,
  
  _createdAt,

}`;

const options = { next: { revalidate: 30 } };

export default async function RecentPosts() {
  const posts = await client.fetch<SanityDocument[]>(
    RECENT_POSTS_QUERY,
    {},
    options,
  );

  return (
    <div className="w-full h-full py-8">
      <div className=" mb-6">
        <div className=" flex flex-row items-center gap-4 mb-6">
          <div className="w-fit h-fit text-center justify-center bg-custom-reddish-pink p-2">
            <h2 className="text-white font-semibold"> Recent Posts</h2>
          </div>
          <div className="border-b border-custom-reddish-pink min-w-fill px-8" />
        </div>
      </div>

      <div className="flex flex-col items-start text-start gap-4">
        {posts.map((post, index) => (
          <Link key={post._id} className="group" href={`/${post.slug.current}`}>
            <article className="flex items-start gap-1">
              <span className="text-custom-dark-blue font-bold text-lg">
                {(index + 1).toString().padStart(2, "0")}.
              </span>
              <div>
                <h3 className="text-base group-hover:text-gray-600 font-bold transition-colors">
                  {post.title}
                </h3>
                <time className="text-xs text-gray-500">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
