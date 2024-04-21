"use client";
import Image from "next/image";

export const AboutMe = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div>
          <div
            id="container-about-me"
            className="grid grid-cols-3 md:gap-4 md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16"
          >
            <h3>About Me</h3>
            <br />
            <p>
              I am a full stack developer trained in technologies like
              JavaScript, NPM, PNPM, Node JS, React JS, Next JS, Python and
              Django
              <br />
              I'm also studying Rust and Cargo to have a much better picture of
              a low-level language. Other things I can do are SEM/SEO targeting,
              Meta services, creation of marketing and social media campaigns,
              Real Estate business.
            </p>
            <Image
              src="/img/office-1.webp"
              alt="pc-office-presentation"
              width={1080}
              height={1080}
              className="container border rounded-lg"
            />
            <div className="flex flex-wrap bg-neutral-600 gap-8">
              <h4>Skills</h4>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Node JS</li>
                <li>NPM</li>
                <li>PNPM</li>
                <li>Rust (soon)</li>
                <li>Kotlin (soon)</li>
              </ul>
              <h4>More tools</h4>
              <ul>
                <li>React JS</li>
                <li>Next JS</li>
                <li>Django</li>
                <li>TailWind CSS</li>
                <li>Bootstrap</li>
                <li>SASS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
