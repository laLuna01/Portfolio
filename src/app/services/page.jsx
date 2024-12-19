"use client";

import { motion } from "framer-motion";
import { RiRobot2Line } from "react-icons/ri";
import { SiMaterialdesignicons } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { TiCodeOutline } from "react-icons/ti";
import { LuTabletSmartphone } from "react-icons/lu";

const services = [
  {
    num: "01",
    title: "Front-End",
    description: "Criação de interfaces visuais interativas e responsivas, focadas na experiência do usuário principalmente com Tailwind, JavaScript, React e Next.js.",
    icon: <TiCodeOutline className="text-white text-5xl transition-all duration-500 group-hover:text-accent group-hover:scale-125" />
  },
  {
    num: "02",
    title: "Back-End",
    description: "Desenvolvimento de APIs e sistemas robustos, garantindo performance, segurança e integração com bancos de dados, usando principalmente SpringBoot e .NET",
    icon: <TiCodeOutline className="text-white text-5xl transition-all duration-500 group-hover:text-accent group-hover:scale-125" />
  },
  {
    num: "03",
    title: "Mobile",
    description: "Criação de aplicativos móveis para Android, utilizando Kotlin para entregar apps modernos, eficientes e focados na melhor experiência do usuário.",
    icon: <LuTabletSmartphone className="text-white text-5xl transition-all duration-500 group-hover:text-accent group-hover:scale-125" />
  },
  {
    num: "04",
    title: "Banco de Dados",
    description: "Gerenciamento e modelagem de banco de dados de acordo com o projeto utilizando principalmente SQL e Firebase, com acesso e armazenamento seguro dos dados.",
    icon: <FiDatabase className="text-white text-5xl transition-all duration-500 group-hover:text-accent group-hover:scale-125" />
  },
  {
    num: "05",
    title: "Machine Learning",
    description: "Criação de modelos preditivos e análise de dados utilizando Python, Scikit-learn, Pandas e outras bibliotecas de machine learning para gerar insights valiosos.",
    icon: <RiRobot2Line className="text-white text-5xl transition-all duration-500 group-hover:text-accent group-hover:scale-125" />
  },
  {
    num: "06",
    title: "Design UI/UX",
    description: "Desenvolvimento de layouts e interfaces intuitivas e modernas, focadas na experiência do usuário e na usabilidade, utilizando ferramentas de prototipagem como Figma.",
    icon: <SiMaterialdesignicons className="text-white text-5xl transition-all duration-500 group-hover:text-accent group-hover:scale-125" />
  },
]

const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:mb-12 mb-4">
    <div className="container mx-auto xl:px-0 px-7">
      <motion.div initial={{opacity: 0}} animate={{
        opacity: 1, 
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" >
        {services.map((item, index) => {
          return <div key={index} className="flex-1 flex justify-center items-center border rounded-2xl border-accent group hover:relative hover:overflow-hidden hover:scale-110 transition-all duration-500">
            <div className="absolute h-[200%] w-[200%] bg-[conic-gradient(var(--tw-gradient-stops))] from-accent/50 via-transparent to-transparent animate-spin-slow hidden group-hover:block"></div>
            <div className="z-10 to-slate-900 w-full h-full p-2">
              <div className="flex flex-col rounded-2xl gap-6 py-7 px-6 items-center justify-center h-full w-full bg-primary">
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                  {item.icon}
                </div>
                <h2 className="text-4xl text-left w-full font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{item.title}</h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            </div>
          </div>
        })}
      </motion.div>
    </div>
  </section>;
}

export default Services;