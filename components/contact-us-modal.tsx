import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/modal";
import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
export default function ContactUsModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="text-sm font-normal text-white bg-custom-dark-blue rounded-none"
        radius="none"
        onPress={onOpen}
      >
        Contact Us
      </Button>
      <Modal
        isOpen={isOpen}
        placement="center"
        radius="none"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Us
                <Image
                  alt="team in office"
                  className="z-0 w-full h-full object-cover object-top"
                  height={200}
                  radius="none"
                  src={"/Animated Professional Team in Office.jpeg"}
                  width={400}
                />
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4 items-center ">
                <div className="flex flex-col w-full items-start gap-4 text-custom-dark-blue">
                  <p className="text-xl text-default-400 font-semibold">
                    Ready to transform your business?
                  </p>
                  <p className="text-sm ">
                    Schedule a free consultation with our experts and discover
                    how we can help optimize your business technology.
                  </p>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://cal.com/monkgogi-moshaga-9bp2as"
                  >
                    Schedule a meeting
                  </Link>

                  <hr />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
