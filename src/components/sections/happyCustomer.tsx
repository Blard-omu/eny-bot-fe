"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Customer1 from "../../../public/Profile/Profile1.jpg";
import Customer2 from "../../../public/Profile/Profile2.jpg";
import Customer3 from "../../../public/Profile/Profile3.jpg";
const testimonials = [
  {
    name: "EMMANUEL O.",
    role: "Product Design Mentee",
    image: Customer1,
    text: `My mentor was incredibly supportive and helped me land my first internship. The weekly sessions were eye-opening!`,
  },
  {
    name: "SARAH A.",
    role: "Frontend Dev Mentee",
    image: Customer2,
    text: `MentorMatch gave me confidence. I improved my skills and built a real-world project under guidance.`,
  },
  {
    name: "JOSH I.",
    role: "Data Analyst Mentee",
    image: Customer3,
    text: `I transitioned careers successfully thanks to my mentor’s feedback and the hands-on tasks. Highly recommend!`,
  },
];

const HappyCustomer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center bg-[#232233]">
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"></div>

      <div className="flex flex-col items-center justify-center relative z-10 px-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-white font-bold mb-4 text-center">
          What Our Mentees Are Saying
        </h1>
        <p className="text-white/80 text-sm md:text-base text-center max-w-2xl">
          Real stories from mentees who’ve upskilled, switched careers, and built confidence through mentorship.
        </p>
      </div>

      <div className="flex items-center justify-center relative z-10 px-4 pt-10">
        <div className="transition-all duration-700 transform bg-white p-6 rounded-2xl max-w-2xl w-full shadow-lg space-y-4">
          <Image
            src={current.image}
            alt={current.name}
            className="w-20 h-20 mx-auto rounded-full object-cover"
          />
          <h2 className="text-center font-semibold text-xl text-black">{current.name}</h2>
          <p className="text-center uppercase text-xs tracking-wide text-gray-600">
            {current.role}
          </p>
          <p className="text-center text-gray-700 text-sm leading-relaxed">
            {current.text}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-2 z-10 relative">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? "bg-[#5c4efc] scale-110"
                : "bg-white/30 hover:bg-[#5c4efc]"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HappyCustomer;
