import { Text, Img, Heading, Button } from "./..";
import React from "react";

export default function HomeTwo1({
  dynamictext = "Passport Plus",
  dynamictext1 = "Beyond Border Immigration",
  dynamictext2 = "Worldwide Visa Assistance",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full p-[26px] sm:p-5 border-gray-300 border border-solid rounded-[20px]`}
    >
      <div className="flex w-full flex-col gap-5">
        <div className="flex items-center gap-5">
          <Button size="4xl" shape="circle" className="w-[60px] !rounded-[30px]">
            <Img src="images/img_006_browser.svg" />
          </Button>
          <Heading as="h5" className="mb-[13px] self-end">
            {dynamictext}
          </Heading>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3.5">
            <Img src="images/img_checkmark.svg" alt="image" className="h-[16px]" />
            <Text as="p" className="self-end !text-gray-600">
              {dynamictext1}
            </Text>
          </div>
          <div className="flex items-center gap-3.5">
            <Img src="images/img_checkmark.svg" alt="image" className="h-[16px]" />
            <Text as="p" className="!text-gray-600">
              {dynamictext2}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
