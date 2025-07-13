import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

interface ValueCardProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <Card className="py-4 w-full h-fit bg-transparent " shadow="none">
      <CardBody className="overflow-visible py-2 items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-[50%] w-[200px] h-[200px] "
          src={backgroundImage}
        />
      </CardBody>
      <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
        <h4 className="font-bold text-large">{title}</h4>
        <small className="text-default-500 text-center">{description}</small>
      </CardFooter>
    </Card>
  );
};

export default ValueCard;
