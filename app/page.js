import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black container mx-auto px-6 py-8 m-10">
      <div className="container min-h-screen flex-col mx-2">
        <HeroSection />
      </div>
    </main>
  );
}
