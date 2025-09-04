import React from "react";

import ServiceCard from "@/components/service_card";

const ServicesGrid = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      backgroundImage: "/BA.png",
      overlayText:
        "Leverage advanced analytics and visualization tools to extract meaningful insights from your data. Our data analytics services help you make data-driven decisions.",
      className: "col-span-1 sm:col-span-1",
    },
    {
      title: "ICT Infrastructure",
      description: "Build robust IT infrastructure solutions",
      backgroundImage: "/infra.png",
      overlayText:
        "Design and implement scalable IT infrastructure solutions that ensure business continuity and operational efficiency.",
      className: "col-span-1 sm:col-span-1 ",
    },
    {
      title: "Digital Marketing",
      description: "Enhance your digital presence",
      backgroundImage: "/dm.png",
      overlayText:
        "Boost your online visibility with comprehensive digital marketing strategies, including SEO, social media, and content marketing.",
      className: "col-span-1 sm:col-span-1 ",
    },
    {
      title: "Corporate Governance",
      description: "Ensure regulatory compliance",
      backgroundImage: "/gov.png",
      overlayText:
        "Implement effective governance frameworks and ensure compliance with regulatory requirements while maintaining operational excellence.",
      className: "relative col-span-1 sm:col-span-1",
    },
    {
      title: "Soft Skills Training",
      description: "Enhance team capabilities",
      backgroundImage: "/softk.png",
      overlayText:
        "Develop your team's interpersonal, communication, and leadership skills through comprehensive training programs.",
      className: "relative col-span-1 sm:col-span-1 h-fill ",
    },
    {
      title: "Records Management",
      description: "Organize and secure your data",
      backgroundImage: "/records managment.png",
      overlayText:
        "Implement efficient records management systems to organize, store, and secure your data, ensuring easy access and compliance with data protection regulations.",
      className: " relative col-span-1 row-span-1 sm:col-span-1 ",
    },
  ];

  return (
    <section className=" mx-0 w-full py-16 px-16 " id="services">
      <h2 className="text-3xl font-medium text-center mb-12 text-darker-black">
        Unlock Your <span className="text-custom-reddish-pink">Potential</span>{" "}
        With Our Services
      </h2>

      <div className="max-w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 mx-0">
        {services.map((service, index) => (
          <div key={index} className={service.className}>
            <ServiceCard
              backgroundImage={service.backgroundImage}
              className=" w-full h-full"
              description={service.description}
              overlayText={service.overlayText}
              title={service.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
