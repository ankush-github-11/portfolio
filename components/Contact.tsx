"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import ContactForm from "./ui/ContactForm";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-full sm:px-[8vw] px-[7px] bg-gradient-to-br from-gray/15 dark:from-lightgray/80 to-bgcolor h-fit pt-15 pb-20"
    >
      <div className="h-full">
        <div className="h-fit w-full border-5 border-emerald/10 rounded-xl flex flex-col md:flex-row">
          <div className="reveal reveal-left left-div h-fit w-full md:w-[50%] p-2 md:p-5">
            <div className="bg-gray/10 p-3 md:p-4 rounded-lg flex flex-col justify-center w-full shadow-lg">
              <h1 className="w-fit h-fit text-3xl font-bold">Contact Me</h1>
              <div className="flex flex-wrap gap-1 w-full">
                Let&apos;s get in touch — Open to opportunities and
                collaborations.
              </div>
            </div>
            <ContactForm />
          </div>

          <div className="reveal reveal-right right-div w-full md:w-[50%] p-5 flex justify-center items-center">
            <Image
              src="/images/contact-image.png"
              alt="Mail Image"
              width={300}
              height={300}
              className="scale-[1.5]"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

Contact.displayName = "Contact";

export default Contact;
