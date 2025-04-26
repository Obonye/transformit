// app/blog/page.tsx
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc){
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

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 text-left">
        <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
        <p className="text-gray-600">
          Explore our latest articles and insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const postImageUrl = post.image
            ? urlFor(post.image)?.width(400).height(250).url()
            : null;

          return (
            <Link
              key={post._id}
              className="group text-left flex flex-col  hover:shadow-lg transition-shadow duration-200"
              href={`/${post.slug.current}`}
            >
              {postImageUrl ? (
                <div className="w-full h-[200px] overflow-hidden">
                  <img
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    src={postImageUrl}
                  />
                </div>
              ) : (
                <div className="w-full h-[200px] bg-gray-100" />
              )}

              <div className="p-4 flex flex-col gap-2">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map(
                    (tag: { name: string; slug: { current: string } }) => (
                      <span
                        key={tag.slug.current}
                        className="px-2 py-1 bg-gray-100 text-xs text-custom-dark-blue font-medium"
                      >
                        {tag.name}
                      </span>
                    ),
                  )}
                </div>

                <h2 className="text-xl font-bold group-hover:text-custom-dark-blue transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.summary}
                </p>

                <p className="text-xs text-gray-500 mt-2">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
