interface CaseStudyCardProps {
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
}

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import Link from "next/link";

import React from "react";

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
    title,
    client,
    industry,
    summary,
    heroImage,
    slug
}) => {
    return (
        <Card>
            <div
                className="w-full h-[250px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage?.asset.url})` }}
            />
            <CardHeader className="flex flex-col justify-start w-full items-start">
                <h1 className="text-xl font-bold truncate w-full">{title}</h1>
                <h2 className="text-large text-gray-600 font-semibold"><span className="text-custom-light-blue">Client:</span> {client}</h2>
                <h2 className="text-large text-gray-600 font-semibold"><span className="text-custom-light-blue">Industry:</span> {industry}</h2>
            </CardHeader>
            <CardBody>
                <p className="text-medium line-clamp-3">{summary}</p>
            </CardBody>
            <CardFooter>
                <Link className="bg-custom-dark-blue text-custom-light-sky-blue px-2 py-1" href={`/case-studies/${slug.current}`}>
                    Read More
                </Link>
            </CardFooter>
        </Card>
    )
}
export default CaseStudyCard;