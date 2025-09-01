import React from "react";

import TestimonialCard from "../components/testimonial-card";

function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Thabani Mongwa",
      role: "General Manager",
      testimonial:
        "We have always found that Transform IT provides just the right balance of professionalism, creativity and customer service to suit our needs. Having worked with them since 2018 across social media, print, and videography projects, they continue to deliver outstanding results. Our new endeavors are also under their passionate service delivery.",
      avatarUrl: "https://images.unsplash.com/broken",
    },
    {
      name: "Kalpesh Naik",
      role: "Managing Director, Timber City Botswana",
      testimonial:
        "Transform IT's attention to detail during the design process consistently surpasses our expectations. Their deep understanding of our brand and business environment, combined with excellent analytics and reporting, has been invaluable for our communication strategies since 2019.",
      avatarUrl: "https://images.unsplash.com/broken",
    },
    {
      name: "Thabiso Mabaka",
      role: "Director, eMotshelo (Pty) Ltd",
      testimonial:
        "Transform IT's expertise in Application Development Testing has been exceptional. Their attention to detail and understanding of user requirements, combined with excellent stakeholder management, has been crucial in delivering quality ICT applications. Their passion for ICT projects and value-driven approach sets them apart.",
      avatarUrl: "https://images.unsplash.com/broken",
    },
  ];

  return (
    <section className="px-4 md:px-6 py-12 flex flex-col items-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medium text-center mb-6 text-custom-light-blue">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-content-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full max-w-md">
            <TestimonialCard
              avatarUrl={testimonial.avatarUrl}
              name={testimonial.name}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
