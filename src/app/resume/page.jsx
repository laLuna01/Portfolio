"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaPython,
  FaJava,
  FaDocker,
  FaWordpress
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiSpring, SiDotnet } from "react-icons/si";
import { RiGraduationCapFill, RiBuilding3Fill } from "react-icons/ri";
import { TbBrandCSharp, TbSql, TbBrandKotlin } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const about = {
  title: "About Me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque inventore sequi quia molestiae iure necessitatibus eum, fugit dolorum commodi eius unde deleniti, ea reiciendis aut? Maxime delectus quia rerum?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Luana Matos",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+55) 11 98516-5812",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazillian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish, Portuguese",
    },
    {
      fieldName: "Email",
      fieldValue: "luana.smatos01@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque inventore sequi quia molestiae iure necessitatibus eum, fugit dolorum commodi eius unde deleniti, ea reiciendis aut? Maxime delectus quia rerum?",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta eaque inventore sequi quia molestiae iure necessitatibus eum, fugit dolorum commodi eius unde deleniti, ea reiciendis aut? Maxime delectus quia rerum?",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Codecamy",
      degree: "Front-End Track",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2019",
    },
    {
      institution: "Community College",
      degree: "Associate Degree in Computer Science",
      duration: "2016 - 2018",
    },
  ],
};

const skills = {
  title: "Minhas skills",
  description:
    "Nesta seção, você encontra as principais ferramentas e tecnologias que venho estudando e aprimorando. Meu objetivo é continuar desenvolvendo minhas habilidades e acompanhando as tendências do setor de tecnologia.",
  items: [
    {
      icon: <FaHtml5 className="group-hover:scale-125 transition-all duration-500" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 className="group-hover:scale-125 transition-all duration-500" />,
      name: "CSS3",
    },
    {
      icon: <FaJs className="group-hover:scale-125 transition-all duration-500" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript className="group-hover:scale-125 transition-all duration-500" />,
      name: "Typescript",
    },
    {
      icon: <FaReact className="group-hover:scale-125 transition-all duration-500" />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs className="group-hover:scale-125 transition-all duration-500" />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs className="group-hover:scale-125 transition-all duration-500" />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss className="group-hover:scale-125 transition-all duration-500" />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaBootstrap className="group-hover:scale-125 transition-all duration-500" />,
      name: "Bootstrap",
    },
    {
      icon: <TbBrandKotlin className="group-hover:scale-125 transition-all duration-500" />,
      name: "Kotlin",
    },
    {
      icon: <FaPython className="group-hover:scale-125 transition-all duration-500" />,
      name: "Python",
    },
    {
      icon: <FaJava className="group-hover:scale-125 transition-all duration-500" />,
      name: "Java",
    },
    {
      icon: <TbBrandCSharp className="group-hover:scale-125 transition-all duration-500" />,
      name: "C#",
    },
    {
      icon: <SiSpring className="group-hover:scale-125 transition-all duration-500" />,
      name: "Spring Boot",
    },
    {
      icon: <SiDotnet className="group-hover:scale-125 transition-all duration-500" />,
      name: ".NET",
    },
    {
      icon: <TbSql className="group-hover:scale-125 transition-all duration-500" />,
      name: "SQL",
    },
    {
      icon: <IoLogoFirebase className="group-hover:scale-125 transition-all duration-500" />,
      name: "Firebase",
    },
    {
      icon: <FaDocker className="group-hover:scale-125 transition-all duration-500" />,
      name: "Docker",
    },
    {
      icon: <FaFigma className="group-hover:scale-125 transition-all duration-500" />,
      name: "Figma",
    },
    {
      icon: <FaWordpress className="group-hover:scale-125 transition-all duration-500" />,
      name: "Wordpress",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }} 
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 xl:mb-12 mb-4" 
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <div className="flex flex-col gap-7 relative w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsList className="flex flex-col gap-6">
              <TabsTrigger value="about">About me</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <Image alt="girl coding" src="/assets/resume/resume.png" layout="responsive" width={380} height={368} quality={100} className="hidden xl:block" />
          </div>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <RiBuilding3Fill className="text-accent" />
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col text-center gap-[30px] xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <RiGraduationCapFill className="text-accent" />
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skills.items.map((item, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
