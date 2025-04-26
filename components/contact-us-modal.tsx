import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
export default function ContactUsModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        radius="none"
        onPress={onOpen}
        className="text-sm font-normal text-white bg-custom-dark-blue rounded-none"
      >
        Contact Us
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="none"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Us
                <Image
                  height={200}
                  width={400}
                  radius="none"
                  alt="team in office"
                  className="z-0 w-full h-full object-cover object-top"
                  src={"/Animated Professional Team in Office.jpeg"}
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
