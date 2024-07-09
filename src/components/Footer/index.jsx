import { Img, Input, Text, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} pt-[30px] sm:pt-5 bg-teal-900`}>
      <div className="flex w-full flex-col items-center gap-[30px]">
        <div className="container-xs md:p-5">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[35%] items-center justify-center gap-[30px] md:w-full sm:flex-col">
              <div className="flex flex-col items-center rounded-[40px] bg-light_green-A700 p-5">
                <Img src="images/img_010_currency.svg" alt="010currency" className="h-[40px] w-[40px]" />
              </div>
              <Heading size="xl" as="h3" className="w-[80%] capitalize leading-9 !text-white-A700 sm:w-full">
                Need any support for tour and visa?
              </Heading>
            </div>
            <div className="h-full w-px bg-white-A700_4c md:h-px md:w-full" />
            <div className="flex w-[39%] items-center justify-center gap-[27px] md:w-full sm:flex-col">
              <div className="flex flex-col items-center rounded-[40px] bg-light_green-A700 p-5">
                <Img src="images/img_globe.svg" alt="globe" className="h-[40px] w-[40px]" />
              </div>
              <Heading size="xl" as="h3" className="w-[83%] capitalize leading-9 !text-white-A700 sm:w-full">
                are you ready for get started travelling?
              </Heading>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 self-stretch">
          <div className="h-px bg-gray-300_66" />
          <div className="relative h-[479px] md:h-auto">
            <Img src="images/img_.svg" alt="image" className="h-[479px] w-full max-w-[1712px] md:p-5" />
            <div className="container-xs absolute bottom-[7%] left-0 right-0 my-auto flex md:p-5">
              <div className="flex w-full items-center justify-between gap-5 pr-[5px] md:flex-col">
                <Text as="p" className="!text-white-A700_cc">
                  © Yoursitename 2024 | All Rights Reserved
                </Text>
                <ul className="flex w-[31%] flex-wrap justify-between gap-5 md:w-full">
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700_cc">
                        Trams & Condition
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700_cc">
                        Privacy Policy
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-white-A700_cc">
                        Contact Us
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-xs absolute left-0 right-0 top-[14%] my-auto flex md:p-5">
              <div className="flex w-full items-end justify-between gap-5 md:flex-col">
                <div className="flex w-[23%] flex-col gap-6 md:w-full">
                  <Img
                    src="images/img_footer_logo.png"
                    alt="footerlogo"
                    className="h-[41px] w-[157px] object-contain"
                  />
                  <Text as="p" className="leading-[30px] !text-white-A700">
                    Corporate business typically refers to large-scale mansola it enterprises or organizat
                  </Text>
                  <div className="flex w-[43%] items-center justify-between gap-5 md:w-full">
                    <Img src="images/img_save.svg" alt="save" className="h-[21px]" />
                    <Img src="images/img_save.svg" alt="save" className="h-[15px] w-[14px]" />
                    <Img src="images/img_close.svg" alt="close" className="h-[16px] w-[15px]" />
                    <Img src="images/img_save.svg" alt="save" className="h-[15px] w-[14px]" />
                  </div>
                </div>
                <div className="mt-1.5 flex w-[34%] items-center justify-between gap-5 md:w-full sm:flex-col">
                  <div className="flex flex-col gap-[30px]">
                    <Heading as="h5" className="!text-white-A700">
                      Services
                    </Heading>
                    <ul className="flex flex-col gap-2.5">
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-[15px] self-start">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[16px]" />
                            <Text as="p" className="!text-white-A700">
                              Mistakes To Avoid
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-[15px] self-start">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[16px]" />
                            <Text as="p" className="self-end !text-white-A700">
                              Your Startup
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-[15px] self-start">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[16px]" />
                            <Text as="p" className="!text-white-A700">
                              Knew About Fonts
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-[15px] self-start">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[16px]" />
                            <Text as="p" className="!text-white-A700">
                              Knew About Fonts
                            </Text>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start gap-[30px]">
                    <Heading as="h5" className="!text-white-A700">
                      Useful Link
                    </Heading>
                    <ul className="flex flex-col items-start gap-2.5">
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-3.5">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[14px]" />
                            <Text as="p" className="!text-white-A700">
                              Latest News
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-3.5">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[14px]" />
                            <Text as="p" className="!text-white-A700">
                              Careers
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-3.5">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[14px]" />
                            <Text as="p" className="self-end !text-white-A700">
                              General Inquiries
                            </Text>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div className="flex items-center gap-3.5">
                            <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[14px]" />
                            <Text as="p" className="!text-white-A700">
                              Case Studies
                            </Text>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex w-[23%] flex-col items-start gap-8 md:w-full">
                  <Heading as="h5" className="!text-white-A700">
                    Subscribe Our Newsletter
                  </Heading>
                  <Text as="p" className="w-full leading-[30px] !text-white-A700">
                    Corporate business typically refers to large-scale mansola it.
                  </Text>
                  <Input
                    shape="round"
                    name="email"
                    placeholder={`Enter Email`}
                    suffix={
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[50%] bg-light_green-A700">
                        <Img src="images/img_save.svg" alt="save" className="h-[19px] w-[14px]" />
                      </div>
                    }
                    className="gap-[35px] self-stretch border border-solid border-white-A700_33 sm:pl-5"
                  />
                </div>
              </div>
            </div>
            <Img
              src="images/img_copy_right.svg"
              alt="copyright"
              className="absolute bottom-[19%] left-0 right-0 m-auto h-px w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
