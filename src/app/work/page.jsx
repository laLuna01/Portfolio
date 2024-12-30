"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "FullStack",
    title: "EcoVolt",
    description: "Previsão e controle de geração e consumo de energia. A solução busca mitigar os desafios do acesso à energia renovável confiável devido à imprevisibilidade climática e de demanda, facilitando a transição energética para sistemas renováveis.",
    stack: [{ name: "Java" }, { name: "Spring Boot" }, { name: "Kotlin" }, { name: "PL/SQL" }, { name: "Python" }, { name: "Scikit-learn" }, { name: "Firebase" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/laLuna01/EcoVoltJava",
  },
  {
    num: "02",
    category: "BackEnd",
    title: "GetCards",
    description: "O projeto automatiza a coleta de dados sobre um conjunto de cartas no site Scryfall. Ele navega entre os links, extrai o título e a descrição de cada uma, e gera um arquivo de texto contendo as informações coletadas. O código utiliza processamento paralelo para melhorar o desempenho, garantindo rapidez e eficiência na execução.",
    stack: [{ name: "C#" }, { name: ".NET" }, { name: "HtmlAgilityPack" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/laLuna01/GetCards_CP",
  },
  {
    num: "03",
    category: "FrontEnd",
    title: "Nike Page",
    description: "Este projeto faz parte do meu aprendizado em Tailwind CSS. A landing page apresenta um design minimalista e visualmente atrativo, inspirado no estilo da marca Nike. O foco principal foi explorar a customização de componentes, aplicar boas práticas de UI/UX e garantir responsividade em diferentes dispositivos.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "https://nike-tailwind-phi.vercel.app/",
    github: "https://github.com/laLuna01/Nike_Tailwind",
  },
  {
    num: "04",
    category: "FullStack",
    title: "Salesforce ++",
    description: "Portal acessível e inclusivo da Salesforce, com navegação simples, intuitiva e visualmente limpa. Foi criado para atender a necessidades de acessibilidade, como: suporte aos espectros do daltonismo, ajuste de tamanhos de texto e elementos, compatibilidade com leitores de tela e uso de uma linguagem mais simples e objetiva.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Next.js" }, { name: "Java" }, { name: "SQL" }],
    image: "/assets/work/thumb4.png",
    live: "https://salesforce-challenge-kohl.vercel.app/",
    github: "https://github.com/laLuna01/Salesforce-Challenge",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }

  return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 xl:mb-12 mb-4">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[60%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            <div className="flex flex-wrap items-center">
              <div className="xs:text-7xl text-6xl leading-none mr-8 font-extrabold text-transparent text-outline">{project.num}</div>
              <div className="xs:text-6xl text-4xl font-bold leading-none text-outline text-transparent">{project.category}</div>
            </div>
            <h2 className="text-[42px] text-wrap font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{project.title}</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex flex-wrap gap-4">
              {project.stack.map((item, index) => {
                return <li key={index} className="text-xl text-accent min-w-fit">{item.name} <span className="text-white font-bold">{index !== project.stack.length - 1 && "+"}</span></li>
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              {project.live !== "" && <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"></BsArrowUpRight>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"></BsGithub>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[40%]">
          <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSlideChange} className="xl:h-[520px] mb-12">
            {projects.map((item, index) => {
              return <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative h-full w-full">
                    <Image alt="project image" src={project.image} fill className="object-cover" />
                  </div>
                </div>
              </SwiperSlide>
            })}
            <WorkSliderButtons containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconStyles="" />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>;
}

export default Work;
