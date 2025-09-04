"use client";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import ContactUs from "@/components/sections/contact";
import { useEffect } from "react";
import HappyCustomer from "@/components/sections/happyCustomer";
import OurTeam from "@/components/sections/team";
import OurCourses from "@/components/sections/courses";
import Chatbot from "@/components/chatbot/chatbot";


export default function Home() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <section id="home">
      <main className="min-h-screen flex flex-col">
        <Hero />
        <Chatbot/>
        <About />
        <OurCourses/>
        <OurTeam/>
        <HappyCustomer/>
        <ContactUs/>
        <Footer />
      </main>
    </section>
  );
}
