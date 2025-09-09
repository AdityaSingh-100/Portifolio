"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    title: "Project One",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    description: "This is a sample project description",
    href: "#",
  },
  {
    title: "Project Two",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    description: "This is a sample project description",
    href: "#",
  },
  {
    title: "Project Three",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    description: "This is a sample project description",
    href: "#",
  },
  {
    title: "Project Three",
    src: "https://aceternity.com/cdn-cgi/image/width=2048/https://assets.aceternity.com/macbook-scroll.png",
    description: "This is a sample project description",
    href: "#",
  },
];

const Projects = () => {
  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can scale to millions of
        users.
      </p>

      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative mb-4 h-72"
          >
            <Link href={project.href} className="block">
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />

              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="max-xs:hidden text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
