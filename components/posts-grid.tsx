// components/posts-grid.tsx
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc)[0...4]{
  _id,
  title,
  summary,
  image,
  _createdAt,
  slug,
  "tags": tags[]->{ 
    name,
    slug
  }
}`;

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function PostsGrid() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="w-full">
      <div className=" mb-6">
        <div className=" flex flex-row items-center gap-4 mb-6">
          <div className="w-fit h-fit text-center justify-center bg-custom-reddish-pink p-2">
            <h2 className="text-white font-semibold">Posts</h2>
          </div>
          <div className="border-b border-custom-reddish-pink min-w-fit px-8" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {posts.map((post) => {
          const postImageUrl = post.image
            ? urlFor(post.image)?.width(800).height(400).url()
            : null;

          return (
            <Link
              key={post._id}
              className="group hover:hover:scale-[0.99] hover:bg-default-100 p-2"
              href={`/${post.slug.current}`}
            >
              {postImageUrl ? (
                <div className="w-full h-[200px] overflow-hidden bg-gray-100">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover"
                    src={postImageUrl}
                  />
                </div>
              ) : (
                <div className="w-full h-[200px] bg-gray-200" />
              )}

              <div className="flex flex-col gap-2 py-2">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map(
                    (tag: { name: string; slug: { current: string } }) => (
                      <span
                        key={tag.slug.current}
                        className="px-2 py-1 bg-gray-100 rounded-none text-sm text-custom-dark-blue font-semibold"
                      >
                        {tag.name}
                      </span>
                    ),
                  )}
                </div>
                <h3 className="flex flex-col items-start text-base font-bold group-hover:text-custom-dark-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-start text-gray-600">
                  {post.summary}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link
          className="inline-block px-6 py-2 border border-gray-200 hover:bg-gray-50 transition-colors"
          href="/blog/posts"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
