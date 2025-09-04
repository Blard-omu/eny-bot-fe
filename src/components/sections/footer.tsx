import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  return (
    <footer className="bg-[#232233] text-white px-4 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo & Socials */}
        <div className="flex flex-col items-start space-y-4">
          <h2 className="font-bold border p-2 text-[#5c4efc]">MENTOR-MATCH</h2>
          <div className="flex space-x-4">
            <Facebook className="h-5 w-5 hover:text-[#5c4efc]" />
            <Instagram className="h-5 w-5 hover:text-[#5c4efc]" />
            <Twitter className="h-5 w-5 hover:text-[#5c4efc]" />
            <Youtube className="h-5 w-5 hover:text-[#5c4efc]" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-[#5c4efc] font-semibold text-lg mb-2">Quick Links</h3>
          <a href="#home" className="text-sm hover:text-[#5c4efc]">Home</a>
          <a href="#about" className="text-sm hover:text-[#5c4efc]">About</a>
          <a href="#features" className="text-sm hover:text-[#5c4efc]">Features</a>
          <a href="#contact" className="text-sm hover:text-[#5c4efc]">Contact</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-2 w-full">
          <h3 className="text-[#5c4efc] font-semibold text-lg mb-2">Newsletter</h3>
          <div className="flex flex-row items-center w-full mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white text-black p-2 rounded-l-md flex-1"
            />
            <button className="bg-[#5c4efc] text-white p-2 rounded-r-md">
              <PaperAirplaneIcon className="h-6 w-6 inline-block" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} MentorMatch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
