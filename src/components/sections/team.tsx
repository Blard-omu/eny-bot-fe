"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    id: "inst1",
    name: "Dr. Sarah Thompson",
    role: "Senior Business Analyst",
    expertise: ["Business Analysis", "Business Process Improvement", "Change Management"],
    image: "/Profile/Profile1.jpg",
  },
  {
    id: "inst2",
    name: "Michael Chen",
    role: "Project Management Specialist",
    expertise: ["Project Management", "Agile/Scrum", "Lean"],
    image: "/Profile/Profile2.jpg",
  },
  {
    id: "inst3",
    name: "Emily Rodriguez",
    role: "Data & Analytics Instructor",
    expertise: ["Business Intelligence", "Data Analytics", "Six Sigma"],
    image: "/Profile/Profile3.jpg",
  },
  {
    id: "inst4",
    name: "James Patel",
    role: "Agile Transformation Coach",
    expertise: ["Agile/Scrum", "DevOps", "ITIL"],
    image: "/Profile/Profile3.jpg",
  },
  {
    id: "inst5",
    name: "Sophia Williams",
    role: "Quality Assurance Lead",
    expertise: ["Software Testing", "Business Analysis", "Process Improvement"],
    image: "/Profile/Profile2.jpg",
  },
  {
    id: "inst6",
    name: "Daniel Johnson",
    role: "Operations Excellence Trainer",
    expertise: ["Six Sigma", "Lean", "Change Management"],
    image: "/Profile/Profile1.jpg",
  },
];


// Slider settings for mobile
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  className: "eny-carousel",
};

const OurTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = Math.ceil(team.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount);
    }, 10000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const getVisibleTeam = () => {
    const start = currentSlide * 3;
    return team.slice(start, start + 3);
  };

  return (
    <section id="team" className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="lg:max-w-7xl md:max-w-2xl max-w-full mx-auto text-center">
        <h2 className="lg:text-4xl text-2xl md:font-bold text-blue-900 mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-sm lg:max-w-xl max-w-lg mx-auto text-gray-700 mb-12">
          Our instructors and AI specialists at ENY Consulting are dedicated to empowering your business analysis journey with expert guidance and cutting-edge technology.
        </p>

        {/* Grid for Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                width={100}
                height={100}
                className="rounded-full mx-auto mt-6 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.expertise.join(", ")}</p>
                <Link
                  href={`/instructors/${member.id}`}
                  className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for Mobile */}
        <div className="md:hidden px-4 overflow-hidden">
          <Slider {...sliderSettings}>
            {team.map((member) => (
              <div key={member.id} className="px-2">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mt-6 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                    <p className="text-sm text-blue-600 mt-1">{member.role}</p>
                    <p className="text-sm text-gray-600 mt-2">{member.expertise.join(", ")}</p>
                    <Link
                      href={`/instructors/${member.id}`}
                      className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Pagination Dots for Desktop Grid */}
        <div className="hidden md:flex justify-center mt-6 space-x-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-blue-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

