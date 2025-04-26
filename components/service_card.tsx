import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

interface ServiceCardProps {
  backgroundImage: string;
  title: string;
  description: string;
  overlayText?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  backgroundImage,
  title,
  description,
  overlayText,
  className = "",
}) => {
  return (
    <Card
      className={"bg-transparent relative group  " + className}
      radius="none"
      shadow="none"
    >
      <CardBody className="relative overflow-hidden h-80">
        <Image
          alt={title}
          className="z-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          radius="none"
          src={backgroundImage}
        />
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-center">{overlayText || description}</p>
        </div>
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-[18px] text-custom-light-sky-blue uppercase font-bold">
          {title}
        </p>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
