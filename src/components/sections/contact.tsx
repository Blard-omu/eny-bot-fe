"use client";
/* eslint-disable react/no-unescaped-entities */
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";


const ContactUs = () => {
  return (
    <section id="contact" className="relative w-full">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"
      ></div>
      <div className="relative flex flex-col min-h-screen space-y-12 mx-auto p-6 lg:px-[5%] lg:container bg-white/20">
        <div className="flex flex-col items-center justify-center relative z-10 px-4 pt-12">
          <h1 className="md:text-4xl text-2xl text-center font-bold text-black mt-2">
            CONTACT US
          </h1>
          <p className="text-sm text-black text-center mt-4 max-w-xl">
            Got questions about CryptWalli? Reach out to our support team anytime. Whether it's help with wallet setup, mining, or feedback — we're here for you 24/7.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center relative z-10 gap-12">
          <div className="flex flex-col items-start justify-start w-full md:w-1/2 space-y-6">
            <div className="flex items-center">
              <PhoneIcon className="h-6 w-6 text-[#5c4efc] mr-3" />
              <span className="text-sm text-black">+1 (800) CRYPT-WL</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="h-6 w-6 text-[#5c4efc] mr-3" />
              <span className="text-sm text-black">support@cryptwalli.com</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-6 w-6 text-[#5c4efc] mr-3" />
              <span className="text-sm text-black">Silicon Valley, CA, USA</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-md min-h-[100px] max-h-[250px]"
              ></textarea>
              
              <Link
                href="/coming-soon"
                className="bg-[#5c4efc] text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-all text-center"
              >
                Send Message
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
