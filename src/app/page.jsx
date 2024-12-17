import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full xl:mb-12 mb-4">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl text-accent">Desenvolvedora de Software</span>
          <h1 className="h1 mb-6">Olá, eu sou<br/> <span className="text-accent-hover">Luana Matos</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80">Sou uma dev full stack que gosta muito de aprender. Aqui, você encontrará meus projetos, habilidades e um pouco sobre mim :)</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="https://docs.google.com/document/d/1NLy-xrDUSmtQUOJsvggYuGZ5m_hkEi2xgxiOvyWz9cQ/export?format=pdf" download="Curriculo.pdf">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-3 border-accent text-accent hover:bg-accent-hover hover:border-accent-hover">
                <span>Baixar Currículo</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border rounded-full flex justify-center items-center text-accent hover:bg-accent border-accent text-base hover:text-primary hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>;
}

export default Home;
 