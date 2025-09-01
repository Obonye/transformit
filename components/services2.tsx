"use client";
import React, { useState } from "react";
import { Image } from "@heroui/image";
import { ChevronDown } from "lucide-react";

const Services2 = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [expandedItem, setExpandedItem] = useState(0);

  const services = [
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      image: "/BA.png",
      content:
        "Leverage advanced analytics and visualization tools to extract meaningful insights from your data. Our data analytics services help you make data-driven decisions, identify trends, and optimize your business processes through comprehensive data analysis and reporting.",
    },
    {
      title: "ICT Infrastructure",
      description: "Build robust IT infrastructure solutions",
      image: "/infra.png",
      content:
        "Design and implement scalable IT infrastructure solutions that ensure business continuity and operational efficiency. From network architecture to cloud solutions, we provide comprehensive infrastructure services that grow with your business needs.",
    },
    {
      title: "Digital Marketing",
      description: "Enhance your digital presence",
      image: "/dm.png",
      content:
        "Boost your online visibility with comprehensive digital marketing strategies, including SEO, social media, and content marketing. Our team creates tailored campaigns that drive engagement, increase brand awareness, and generate qualified leads.",
    },
    {
      title: "Corporate Governance",
      description: "Ensure regulatory compliance",
      image: "/gov.png",
      content:
        "Implement effective governance frameworks and ensure compliance with regulatory requirements while maintaining operational excellence. We help organizations establish robust governance structures and maintain transparency.",
    },
    {
      title: "Soft Skills Training",
      description: "Enhance team capabilities",
      image: "/softk.png",
      content:
        "Develop your team's interpersonal, communication, and leadership skills through comprehensive training programs. Our expert trainers deliver customized workshops that improve team dynamics and professional development.",
    },
    {
      title: "Records Management",
      description: "Organize and secure your data",
      image: "/records managment.png",
      content:
        "Implement efficient records management systems to organize, store, and secure your data, ensuring easy access and compliance with data protection regulations. Streamline your document workflows and enhance information governance.",
    },
  ];

  const handleAccordionClick = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index);
    setSelectedService(index);
  };

  return (
    <section className="w-full py-16 px-8 " id="services2">
      <h2 className="text-4xl font-medium text-center mb-12 text-custom-light-blue">
        Discover Our <span className="text-custom-light-blue">Services</span>{" "}
        In Detail<span className="text-custom-reddish-pink">.</span>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8  items-start">
        {/* Image Section */}
        <div className="w-full flex justify-center lg:justify-center">
          <div className="relative w-full max-w-md">
            <Image
              alt={services[selectedService].title}
              className="w-full h-[525px] object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out"
              src={services[selectedService].image}
              radius="lg"
            />

          </div>
        </div>
        {/* Accordion Section */}
        <div className="w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden border-b border-gray-600 last:border-b-0"
            >
              <button
                onClick={() => handleAccordionClick(index)}
                className="w-full px-6 py-4 text-left  hover:bg-default transition-colors duration-200 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedItem === index ? "transform rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedItem === index ? "max-h-96" : "max-h-0"
                  }`}
              >
                <div className="px-6 py-4 bg-custom-light-sky-blue border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {service.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services2;