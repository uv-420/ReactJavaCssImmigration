import { Img, Heading, Text } from "./..";
import React from "react";

export default function CoachingRowview({
  oetcoaching = "OET Coaching",
  therearemany = "There are many variati of passages of engineer",
  readmore = "Read More",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex sm:flex-col items-center w-full pr-5 gap-5 bg-white-A700 rounded-[20px]`}
    >
      <div className="h-[248px] w-full rounded-bl-[20px] rounded-tl-[20px] bg-blue_gray-100" />
      <div className="flex w-full flex-col items-start gap-[25px] sm:w-full">
        <Heading size="md" as="h6">
          {oetcoaching}
        </Heading>
        <Text as="p" className="w-full leading-[30px] !text-gray-600">
          {therearemany}
        </Text>
        <div className="flex items-center gap-2.5">
          <a href="#" className="self-end">
            <Heading size="xs" as="p" className="!text-light_green-A700">
              {readmore}
            </Heading>
          </a>
          <Img src="images/img_arrow_left_light_green_a700.svg" alt="read_more" className="h-[24px]" />
        </div>
      </div>
    </div>
  );
}
