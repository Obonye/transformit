import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

import { client } from "@/sanity/client";
import { PortableTextComponent } from "@/components/CustomPortableText";
import ReadingTime from "@/components/ReadingTime";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  image,
  publishedAt,
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

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-5xl p-8 flex flex-col gap-4">
      <Link className="hover:underline" href="/blog">
        ← Back to hub
      </Link>
      {postImageUrl && (
        <img
          alt={post.title}
          className=" rounded-none"
          height="310"
          src={postImageUrl}
          width="100%"
        />
      )}
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      <ReadingTime text={post.body.toString()} />
      <div className="prose max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-default-700 prose-a:text-default-600">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {post.body && <PortableTextComponent value={post.body} />}
      </div>
    </main>
  );
}
