import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { Image } from "@heroui/image";
import { PortableTextComponent } from "@/components/CustomPortableText";
import { notFound } from "next/navigation";

const CASE_STUDY_QUERY = `*[_type == "caseStudy" && slug.current == $slug][0]{
  _id,
  title,
  subtitle,
  client,
  industry,
  projectDuration,
  teamSize,
  heroImage,
  summary,
  challenge,
  solution,
  technologies,
  services,
  results,
  metrics,
  testimonial,
  gallery,
  publishedAt,
  tags[]->{ 
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

type Props = {
  params: { slug: string };
};

export default async function CaseStudyPage({ params }: Props) {
  const caseStudy = await client.fetch<SanityDocument>(
    CASE_STUDY_QUERY,
    { slug: params.slug },
    options,
  );

  if (!caseStudy) {
    notFound();
  }

  const heroImageUrl = caseStudy.heroImage
    ? urlFor(caseStudy.heroImage)?.width(1200).height(600).url()
    : null;

  return (
    <article className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative">
        {heroImageUrl && (
          <div
            className="w-full h-[400px] md:h-[500px] relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl  px-4 pb-12 text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags?.map((tag: any) => (
                <span
                  key={tag.slug.current}
                  className="bg-custom-dark-blue px-3 py-1 text-sm rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
            {caseStudy.subtitle && (
              <p className="text-xl md:text-2xl mb-4">{caseStudy.subtitle}</p>
            )}
            <p className="text-lg">{caseStudy.summary}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-custom-dark-blue mb-2">Client</h3>
              <p className="text-gray-700">{caseStudy.client}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-custom-dark-blue mb-2">Industry</h3>
              <p className="text-gray-700">{caseStudy.industry}</p>
            </div>
            {caseStudy.projectDuration && (
              <div>
                <h3 className="text-lg font-semibold text-custom-dark-blue mb-2">Duration</h3>
                <p className="text-gray-700">{caseStudy.projectDuration}</p>
              </div>
            )}
            {caseStudy.teamSize && (
              <div>
                <h3 className="text-lg font-semibold text-custom-dark-blue mb-2">Team Size</h3>
                <p className="text-gray-700">{caseStudy.teamSize}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Challenge */}
        {caseStudy.challenge && (
          <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold mb-6 text-custom-light-blue text-left">The Challenge</h2>
            <div className="w-full text-left">
              <PortableTextComponent value={caseStudy.challenge} />
            </div>
          </section>
        )}

        {/* Solution */}
        {caseStudy.solution && (
          <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold mb-6 text-custom-light-blue text-left">Our Solution</h2>
            <div className="w-full text-left">
              <PortableTextComponent value={caseStudy.solution} />
            </div>
          </section>
        )}

        {/* Technologies & Services */}
        <div className="w-full mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.technologies && caseStudy.technologies.length > 0 && (
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-4 text-custom-dark-blue text-left">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech: string, index: number) => (
                    <span
                      key={index}
                      className="bg-custom-light-blue text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {caseStudy.services && caseStudy.services.length > 0 && (
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-4 text-custom-dark-blue text-left">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.services.map((service: string, index: number) => (
                    <span
                      key={index}
                      className="bg-custom-reddish-pink text-white px-3 py-1 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {caseStudy.results && (
          <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold mb-6 text-custom-light-blue text-left">Results & Impact</h2>
            <div className="w-full text-left">
              <PortableTextComponent value={caseStudy.results} />
            </div>
          </section>
        )}

        {/* Key Metrics */}
        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold mb-6 text-custom-light-blue text-left">Key Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.metrics.map((metric: any, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-custom-dark-blue mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold mb-2">{metric.label}</div>
                  {metric.description && (
                    <p className="text-gray-600 text-sm">{metric.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Testimonial */}
        {caseStudy.testimonial?.quote && (
          <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold mb-6 text-custom-light-blue text-left">Client Testimonial</h2>
            <div className="bg-custom-dark-blue text-white p-8 rounded-lg">
              <blockquote className="text-xl italic mb-4 text-left">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <footer className="text-custom-light-sky-blue text-left">
                <div className="font-semibold">{caseStudy.testimonial.author}</div>
                {caseStudy.testimonial.position && (
                  <div>{caseStudy.testimonial.position}</div>
                )}
                {caseStudy.testimonial.company && (
                  <div>{caseStudy.testimonial.company}</div>
                )}
              </footer>
            </div>
          </section>
        )}

        {/* Gallery */}
        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <section className="mb-16 w-full">
            <h2 className="text-3xl font-bold mb-6 text-custom-light-blue text-left">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.gallery.map((image: any, index: number) => {
                const imageUrl = urlFor(image)?.width(600).height(400).url();
                return (
                  <div key={index} className="relative">
                    {imageUrl && (
                      <div 
                        className="w-full h-64 bg-cover bg-center bg-no-repeat rounded-lg"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                      />
                    )}
                    {image.caption && (
                      <p className="text-sm text-gray-600 mt-2 text-left">{image.caption}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const caseStudies = await client.fetch(
    `*[_type == "caseStudy"]{ "slug": slug.current }`
  );

  return caseStudies.map((caseStudy: { slug: string }) => ({
    slug: caseStudy.slug,
  }));
}