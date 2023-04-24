"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  IconCss3,
  IconHtml5,
  IconCypress,
  IconDocker,
  IconGit,
  IconGitlab,
  IconJS,
  IconJest,
  IconMui,
  IconNextJs,
  IconReact,
  IconRedux,
  IconTailwind,
  IconTypescript,
  IconWebpack,
} from "./svgs";

const Skills = () => {
  const TECHNOLOGIES = [
    {
      name: "Html5",
      Icon: IconHtml5,
    },
    {
      name: "Css3",
      Icon: IconCss3,
    },
    {
      name: "Javascript",
      Icon: IconJS,
    },
    {
      name: "React",
      Icon: IconReact,
    },
    {
      name: "NextJs",
      Icon: IconNextJs,
    },
    {
      name: "Redux",
      Icon: IconRedux,
    },
    {
      name: "Typescript",
      Icon: IconTypescript,
    },
    {
      name: "Webpack",
      Icon: IconWebpack,
    },
    {
      name: "Tailwind",
      Icon: IconTailwind,
    },
    {
      name: "Cypress",
      Icon: IconCypress,
    },
    {
      name: "Docker",
      Icon: IconDocker,
    },
    {
      name: "Git",
      Icon: IconGit,
    },
    {
      name: "Gitlab",
      Icon: IconGitlab,
    },
    {
      name: "Jest",
      Icon: IconJest,
    },
    {
      name: "Mui",
      Icon: IconMui,
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="bg-white">
      <div className="container m-auto px-2 py-16">
        <h4 className="mb-8 text-3xl font-bold text-center md:text-lefts text-slate-950	">
          Tech
        </h4>
        <motion.div
          className="grid grid-cols-5  md:grid-cols-10 lg:grid-cols-10 gap-4"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {TECHNOLOGIES.map(({ name, Icon }) => {
            return (
              <motion.div
                key={name}
                variants={item}
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Icon
                  width="70%"
                  initial={{ scale: 0, rotate: 180 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
