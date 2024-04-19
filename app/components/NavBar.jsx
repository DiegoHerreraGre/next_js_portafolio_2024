"use client";
import Link from "next/link";
import { Bars4Icon, XCircleIcon } from "@heroicons/react/16/solid";
import { useMemo, useState } from "react";

export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleToggle = () => {
    setNavBarOpen(!navBarOpen);
  };

  const nav_bar_links = useMemo(
    () => [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Projects",
        path: "/projects",
      },
      {
        title: "Contact",
        path: "/contact",
      },
    ],
    [],
  );

  return (
    <nav className="fixed top-0 right-0 left-0 bg-neutral-800 bg-opacity-75 z-10">
      <div className="flex justify-between text-2xl mx-auto p-8 shadow-2xl">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-lg md:text-2xl lg:text-4xl text-white font-semibold"
          >
            LOGO
          </Link>

          <button onClick={handleToggle}>
            {!navBarOpen ? (
              <Bars4Icon className="block sm:hidden h-6 w-6 text-white font-semibold" />
            ) : (
              <XCircleIcon className="block sm:hidden h-6 w-6 text-white font-semibold" />
            )}
          </button>
        </div>

        <div
          className={`${
            navBarOpen ? "flex flex-col mt-6 items-start" : "hidden"
          } lg:flex lg:flex-row lg:items-center lg:mt-0`}
        >
          {nav_bar_links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-white mb-2 lg:mb-0 lg:ml-6"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
