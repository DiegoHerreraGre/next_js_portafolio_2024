import { HeroSection } from "./components/HeroSection";
import { NavBar } from "@/app/components/NavBar";

export default function Home() {
  return (
    <>
      <head>
        <link
          rel="preload"
          href="Mona-Sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin
        />
      </head>
      <body>
        <main className="flex min-h-screen flex-col bg-black">
          <NavBar />
          <div className="flex flex-row container mx-auto px-12 py-4">
            <HeroSection />
          </div>
        </main>
      </body>
    </>
  );
}
