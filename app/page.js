"use client";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "@/app/components/NavBar";
import { AboutMe } from "@/app/components/AboutMe";

export default function Home() {
  return (
    <>
      <head>
        <link
          rel="preload"
          href="../fonts/MonaSans-Regular.woff2"
          as="font"
          type="woff2"
          crossOrigin="anonymous"
        />
        <title>Portafolio DHG</title>
      </head>
      <body>
        <main className="flex flex-col bg-black">
          <NavBar />
          <div className="flex flex-row container mx-auto px-12">
            <HeroSection />
          </div>
        </main>
        <AboutMe />
      </body>
    </>
  );
}
