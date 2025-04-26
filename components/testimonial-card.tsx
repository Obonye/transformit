import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Avatar } from "@heroui/avatar";

function TestimonialCard({
  name = "John Doe",
  role = "CEO, Company",
  testimonial = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  avatarUrl = "https://i.pravatar.cc/150?u=a042581f4e29026704d",
}) {
  return (
    <Card className="max-w-[320px] rounded-none">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar size="md" src={avatarUrl} showFallback />
        <div>
          <h4 className="font-bold text-large">{name}</h4>
          <small className="text-default-500">{role}</small>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-default-500">{testimonial}</p>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;
