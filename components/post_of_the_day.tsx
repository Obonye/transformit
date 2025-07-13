import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";

const POST_OF_DAY_QUERY = `*[_type == "post" && isFeatured==true] | order(_createdAt desc)[0]{
  _id,
  title,
  summary,
  category,
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

export default async function PostOfTheDay() {
  const post = await client.fetch<SanityDocument>(
    POST_OF_DAY_QUERY,
    {},
    options,
  );

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(800).height(400).url()
    : null;

  if (!post) return <div>No featured post available</div>;

  return (
    <div className="flex flex-col w-full justify-start gap-0 py-4 md:py-8">
      <div className="w-fit h-fit text-center justify-center bg-custom-dark-blue p-2 mb-4">
        <h2 className="text-custom-light-sky-blue font-semibold">
          Post of the day
        </h2>
      </div>

      <Link className="group" href={`/${post.slug.current}`}>
        <div className="flex flex-col lg:flex-row gap-4 transition-transform duration-300 hover:scale-[0.99] hover:bg-default-100 p-2">
          {postImageUrl ? (
            <div className="w-full lg:w-1/2 h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden">
              <img
                alt={post.title}
                className="w-full h-full object-cover"
                height="400"
                src={postImageUrl}
                width="800"
              />
            </div>
          ) : (
            <div className="w-full lg:w-1/2 h-[250px] md:h-[300px] lg:h-[400px] bg-gray-200" />
          )}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-2 text-left p-2 lg:p-0">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map(
                (tag: { name: string; slug: { current: string } }) => (
                  <span
                    key={tag.slug.current}
                    className="px-2 py-1 bg-gray-100 rounded-none text-xs md:text-sm text-custom-dark-blue font-semibold"
                  >
                    {tag.name}
                  </span>
                ),
              )}
            </div>

            <p className="text-xs md:text-sm text-default-400 font-bold">
              {new Date(post._createdAt).toLocaleDateString()}
            </p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold group-hover:text-custom-dark-blue transition-colors">
              {post.title}
            </h1>
            <p className="text-base md:text-lg text-custom-grey line-clamp-3 md:line-clamp-none">
              {post.summary}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
