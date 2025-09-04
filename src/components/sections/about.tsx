import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
        <h1 className="lg:text-4xl text-2xl font-bold text-gray-900 lg:mb-8 mb-4">
          ABOUT US
        </h1>
        <p className="text-sm md:text-lg text-center text-gray-700 lg:max-w-2xl max-w-lg">
          <span className="font-semibold">Eny Consultant Inc.</span> is a trusted partner in 
          business transformation. We specialize in business analysis training, AI-driven 
          consulting, and digital solutions that empower professionals and organizations 
          to achieve measurable success. Our mission is to bridge the gap between data, 
          people, and strategy — enabling smarter decisions and sustainable growth. 
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-center lg:mt-12 mt-8 relative"
          style={{ minHeight: "8rem" }}
        >
          <Image
            src={`/public/Images/mentor11.png`}
            alt="Eny Consultant Office"
            className="w-60 md:w-72 lg:w-96 h-auto relative z-10 mx-auto rounded-xl shadow-lg"
          />

          <div className="flex flex-col items-center justify-center lg:mt-0 lg:ml-40 md:ml-20 mt-12 w-full max-w-xl">
            <div className="space-y-6 w-full px-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Proven Expertise
                </h2>
                <p className="text-sm text-gray-600">
                  Our consultants are industry-certified professionals with hands-on 
                  experience in business analysis, strategy, and technology implementation.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Tailored Solutions
                </h3>
                <p className="text-sm text-gray-600">
                  From training programs to AI-powered tools, we design solutions 
                  that align with your business goals and drive measurable outcomes.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg lg:p-8 p-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Continuous Growth
                </h4>
                <p className="text-sm text-gray-600">
                  We don&apos;t just deliver solutions — we empower teams with the knowledge, 
                  skills, and tools to sustain long-term success in a digital-first world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


