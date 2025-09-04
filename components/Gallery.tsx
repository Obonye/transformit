import React from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { Image } from "@heroui/image";

interface GalleryItem {
  _id: string;
  image: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  alt: string;
  tag?: {
    title: string;
    _id: string;
  };
  description?: string;
}

interface GalleryProps {
  title?: string;
  subtitle?: string;
  tagFilter?: string;
  limit?: number;
  className?: string;
}

const GALLERY_QUERY = `*[_type == "gallery" $tagFilter] | order(_createdAt desc) $limit {
  _id,
  "image": image{
    asset->{
      url
    },
    alt
  },
  alt,
  "tag": tag->{
    title,
    _id
  },
  description
}`;

const options = { next: { revalidate: 30 } };

export default async function Gallery({
  title = "Gallery",
  subtitle,
  tagFilter,
  limit,
  className = ""
}: GalleryProps) {
  const tagFilterQuery = tagFilter ? `&& tag->title == "${tagFilter}"` : "";
  const limitQuery = limit ? `[0...${limit}]` : "";

  const query = GALLERY_QUERY
    .replace("$tagFilter", tagFilterQuery)
    .replace("$limit", limitQuery);

  const galleryItems = await client.fetch<SanityDocument[]>(
    query,
    {},
    options,
  );

  if (!galleryItems || galleryItems.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-custom-light-blue">
            {title}<span className="text-custom-reddish-pink">.</span>
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* === THE ONLY LINE THAT CHANGED IS HERE === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item: any) => (
            <div
              key={item._id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.image?.asset?.url}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {item.tag && (
                    <span className="inline-block px-2 py-1 text-xs bg-custom-reddish-pink rounded-full mb-2">
                      {item.tag.title}
                    </span>
                  )}
                  {item.description && (
                    <p className="text-sm opacity-90">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}