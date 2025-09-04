// import Navbar from "../navbar";
// import shapeBG from "../../../public/Images/BackgroundImage.png";
// import AppImage1 from "../../../public/Images/mentor6.png";
// import AppImage2 from "../../../public/Images/eny2.png";
// import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
// import { BsYoutube, BsTwitter } from "react-icons/bs";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaFacebook } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// const Hero = () => {
//   return (
//     <div className="relative flex flex-col min-h-screen">
//       <div
//         className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
//         style={{ backgroundImage: `url(${shapeBG.src})` }}
//       ></div>

//       <div className="lg:max-w-7xl md:max-w-2xl max-w-full w-full mx-auto md:z-10 z-20">
//         {/* Top Contact Bar */}
//         <div className="hidden md:flex flex-row items-center lg:px-10 py-4 bg-opacity-80">
//           <EnvelopeIcon className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
//           <h1 className="text-white lg:ml-2 lg:text-lg ml-4 mr-6 text-sm">
//             support@mentormatch.com
//           </h1>
//           <PhoneIcon className="lg:h-6 lg:w-6 h-4 w-4 ml-8 text-white" />
//           <h2 className="text-white lg:ml-2 lg:text-lg ml-4 text-sm">
//             +1 (800) 123-4567
//           </h2>
//           <div className="flex items-center space-x-6 ml-auto">
//             <FaFacebook className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
//             <RiInstagramFill className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
//             <BsTwitter className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
//             <BsYoutube className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
//           </div>
//         </div>

//         <Navbar />

//         {/* Hero Content */}
//         <div className="lg:max-w-7xl md:max-w-2xl max-w-full mx-auto lg:px-[5%] px-2 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center lg:mt-16">
//           {/* Left Text Section */}
//           <div className="flex flex-col justify-center lg:w-[570px] lg:h-[535px] w-full md:h-[381px] h-[358px]">
//             <h1 className="text-3xl md:text-[3rem] lg:text-[48px] text-center lg:text-start lg:font-bold font-semibold text-white leading-tight lg:mb-6 mb-4">
//               Connect. Learn. Grow. <br /> One Mentor at a Time.
//             </h1>
//             <p className="text-white/80 md:text-[1.4rem] text-center lg:text-start lg:mb-12 mb-2">
//               MentorMatch helps you connect with experienced professionals, set mentorship goals, schedule sessions, and track your progress — all in one place.
//             </p>
//             <div className=" text-center lg:text-start mt-8 lg:mt-0 flex justify-center lg:block">
//               <Link
//                 href="/register"
//                 className="bg-transparent text-center text-white hover text-sm lg:text-xl px-2 py-2 lg:px-4 lg:py-3 mt-3 md:mt-0 rounded border border-white hover:bg-white hover:text-[#5c4efc] mr-2 md:mr-4 block lg:inline-block"
//               >
//                 BECOME A MENTOR
//               </Link>
//               <Link
//                 href="/register"
//                 className="hover:bg-transparent text-center hover:text-white text-sm lg:text-xl px-2 py-2 lg:px-4 lg:py-3 mt-3 md:mt-0 rounded border border-white bg-white text-[#5c4efc] block lg:inline-block"
//               >
//                 BECOME A MENTOR
//               </Link>
//             </div>
//           </div>

//           {/* Right Image Section */}
//           <div className="rounded-2xl">
//             <div className="hidden lg:inline-block w-[150px] h-[150px] object-contain bg-[#5c4efc]/20 rounded-full border border-dashed border-white/40">
//             <Image
//               src={AppImage1}
//               alt="MentorMatch App Graphic"
//               className="w-full h-full object-contain"
//               priority
//             />
//             </div>


//             <Image
//               src={AppImage2}
//               alt="Mentorship session visual"
//               className="w-full rounded-2xl"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import Navbar from "../navbar";
import shapeBG from "../../../public/images/BackgroundImage.png";
import AppImage1 from "../../../public/Images/mentor6.png";
import AppImage2 from "../../../public/Images/eny2.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: `url(${shapeBG.src})` }}
      ></div>

      <div className="lg:max-w-7xl md:max-w-2xl max-w-full w-full mx-auto md:z-10 z-20">
        {/* Top Contact Bar */}
        <div className="hidden md:flex flex-row items-center lg:px-10 py-4">
          <EnvelopeIcon className="lg:h-6 lg:w-6 h-4 w-4 text-white" />
          <h1 className="text-white lg:ml-2 lg:text-lg ml-4 mr-6 text-sm">
            support@enyconsulting.ca
          </h1>
          <PhoneIcon className="lg:h-6 lg:w-6 h-4 w-4 ml-8 text-white" />
          <h2 className="text-white lg:ml-2 lg:text-lg ml-4 text-sm">
            +1 (800) 987-6543
          </h2>
          <div className="flex items-center space-x-6 ml-auto">
            <a href="https://facebook.com/enyconsulting" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="lg:h-6 lg:w-6 h-4 w-4 text-white hover:text-blue-300" />
            </a>
            <a href="https://instagram.com/enyconsulting" target="_blank" rel="noopener noreferrer">
              <RiInstagramFill className="lg:h-6 lg:w-6 h-4 w-4 text-white hover:text-blue-300" />
            </a>
            <a href="https://twitter.com/enyconsulting" target="_blank" rel="noopener noreferrer">
              <BsTwitter className="lg:h-6 lg:w-6 h-4 w-4 text-white hover:text-blue-300" />
            </a>
            <a href="https://youtube.com/enyconsulting" target="_blank" rel="noopener noreferrer">
              <BsYoutube className="lg:h-6 lg:w-6 h-4 w-4 text-white hover:text-blue-300" />
            </a>
          </div>
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="lg:max-w-7xl md:max-w-2xl max-w-full mx-auto lg:px-[5%] px-4 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-center lg:mt-16 mt-8">
          {/* Left Text Section */}
          <div className="flex flex-col justify-center lg:w-[570px] lg:h-[535px] w-full md:h-[381px] h-auto">
            <h1 className="text-[1.785rem] md:text-[3rem] lg:text-[48px] text-center lg:text-start font-bold text-white leading-tight lg:mb-6 mb-4">
              Driving Business Growth <br /> with Expert Data analysis.
            </h1>
            <p className="text-white/90 md:text-[1.25rem] lg:text-[1.4rem] text-center lg:text-start lg:mb-12 mb-4">
              At <span className="font-semibold">ENY Consultant</span>, we provide expert guidance and
              business analysis training — empowering professionals and organizations
              to make smarter decisions and achieve sustainable success.
            </p>

            <div className="max-w-2/3 mx-auto md:max-w-full md:mx-0 text-center lg:text-start mt-8 lg:mt-0 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/register"
                className="bg-transparent text-center text-white text-sm lg:text-xl px-4 py-3 rounded border border-white hover:bg-white hover:text-blue-900 transition duration-300"
              >
                START YOUR JOURNEY
              </Link>
              <Link
                href="#courses"
                className="bg-white text-center text-blue-900 text-sm lg:text-xl px-4 py-3 rounded border border-white hover:bg-transparent hover:text-white transition duration-300"
              >
                EXPLORE COURSES
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative rounded-2xl">
            <div className="hidden lg:inline-block absolute -top-10 -left-10 w-[150px] h-[150px] bg-blue-500/20 rounded-full border border-dashed border-white/40">
              <Image
                src={AppImage1}
                alt="ENY AI Chatbot"
                className="w-full h-full object-contain p-4"
                priority
              />
            </div>
            <Image
              src={AppImage2}
              alt="Business Analysis Learning"
              className="w-full rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
