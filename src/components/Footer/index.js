"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10   text-light dark:text-dark">
      <div className="w-full  mt-16 md:mt-24 relative font-medium  border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 coders. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by
          <Link href="/coders" className="mx-2">Coders</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
