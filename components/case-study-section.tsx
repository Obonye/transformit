import React from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import CaseStudyCard from "./case-study-card";

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

export default async function CaseStudySection() {
    const caseStudies = await client.fetch<SanityDocument[]>(
        CASE_STUDIES_QUERY,
        {},
        options,
    );

    if (!caseStudies || caseStudies.length === 0) {
        return (
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-custom-light-blue">Case Studies</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            No case studies available at the moment.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-custom-light-blue">Case Studies<span className="text-custom-reddish-pink">.</span></h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how we've helped businesses achieve their goals.
                    </p>
                </div>

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
            </div>
        </section>
    );
}

