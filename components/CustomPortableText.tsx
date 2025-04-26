// lib/components/PortableTextComponent.tsx
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

import { client } from "@/sanity/client";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const components = {
  types: {
    image: ({ value }: { value: SanityImageSource }) => {
      const imageUrl = value ? urlFor(value)?.width(800).url() : null;

      if (!imageUrl) return null;

      return (
        <div className="relative w-full h-[400px] my-8">
          <Image fill alt={""} className="object-cover" src={imageUrl} />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className=" text-white mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 my-4 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          className="text-blue-600 hover:underline"
          href={value.href}
          rel={rel}
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-default-700">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-default-700">{children}</li>
    ),
  },
};

export function PortableTextComponent({ value }: { value: any }) {
  return <PortableText components={components} value={value} />;
}
