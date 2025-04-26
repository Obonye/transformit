// app/feed/page.tsx
"use client";
import { client } from "@/sanity/client";
import SocialMediaEmbed from "@/components/social-media-embed";

interface FeedContent {
  _id: string;
  title: string;
  description?: string;
  contentType: string;
  socialEmbed?: {
    platform: string;
    postUrl: string;
  };
}

async function getPosts() {
  return await client.fetch<FeedContent[]>(
    `
    *[_type == "feedContent"] | order(publishedAt desc) {
      _id,
      title,
      description,
      contentType,
      socialEmbed
    }
  `,
    {},
    { next: { revalidate: 60 } },
  );
}

export default async function Feed() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Our Feed</h1>
      <div className="grid gap-8">
        {posts.map((post) => (
          <div key={post._id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            {post.description && (
              <p className="text-gray-600 mb-4">{post.description}</p>
            )}
            {post.contentType === "social" && post.socialEmbed && (
              <div className="mt-4">
                <SocialMediaEmbed
                  platform={post.socialEmbed.platform}
                  postUrl={post.socialEmbed.postUrl}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
