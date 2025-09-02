import React from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import CaseStudyCard from "@/components/case-study-card";

interface CaseStudy {
    _id: string;
    title: string;
    client: string;
    industry: string;
    summary: string;
    heroImage?: {
        asset: {
            url: string;
        };
        alt?: string;
    };
    slug: {
        current: string;
    };
    publishedAt: string;
    isFeatured: boolean;
}

const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  title,
  client,
  industry,
  summary,
  "heroImage": heroImage{
    asset->{
      url
    },
    alt
  },
  slug,
  publishedAt,
  isFeatured
}`;

const options = { next: { revalidate: 30 } };

export default async function CaseStudiesPage() {
    const caseStudies = await client.fetch<SanityDocument[]>(
        CASE_STUDIES_QUERY,
        {},
        options,
    );

    return (
        <div className="min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-custom-light-blue">
                        Case Studies<span className="text-custom-reddish-pink">.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our portfolio of successful projects and see how we've helped businesses 
                        achieve their goals through innovative solutions and strategic thinking.
                    </p>
                </div>

                {(!caseStudies || caseStudies.length === 0) ? (
                    <div className="text-center py-16">
                        <h2 className="text-2xl font-bold mb-4 text-gray-600">No Case Studies Available</h2>
                        <p className="text-lg text-gray-500">
                            We're currently working on showcasing our latest projects. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((caseStudy: any) => (
                            <CaseStudyCard
                                key={caseStudy._id}
                                title={caseStudy.title}
                                client={caseStudy.client}
                                industry={caseStudy.industry}
                                summary={caseStudy.summary}
                                heroImage={caseStudy.heroImage}
                                slug={caseStudy.slug}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}