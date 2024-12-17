"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Telefone",
    description: "(+55) 11 98516-5812",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "luana.smatos01@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Zona Sul - São Paulo, Brasil",
  },
]

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [phone, setPhone] = useState('');

  const closePopup = () => {
    setIsPopupVisible(false);
    setTimeout(() => {
      document.getElementById('contactForm').reset();
      setSelectedService('');
      setPhone('');
    }, 2000);
  }

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, '').substring(0, 11);
    const areaCode = digits.substring(0, 2);
    const firstPart = digits.length > 6 && digits.length == 11 ? digits.substring(2, 7) : digits.substring(2, 6);
    const secondPart = digits.length > 6 && digits.length == 11 ? digits.substring(7, 11) : digits.substring(6, 10);

    if (digits.length > 6) {
      setPhone(`(${areaCode}) ${firstPart} ${secondPart}`);
    } else if (digits.length > 2) {
      setPhone(`(${areaCode}) ${firstPart}`);
    } else if (digits.length > 0) {
      setPhone(`(${areaCode}`);
    } else {
      setPhone('');
    }
  };

  const handleSelectChange = (value) => {
    setSelectedService(value);
  };  

  const handleSubmit = () => {
    setIsPopupVisible(true);
  };

  return <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="py-6 xl:mb-12 mb-4">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl:w-[54%] order-2 xl:order-none">
          <iframe name="hiddenFrame" className="hidden"></iframe>
          <form id="contactForm" action="https://formsubmit.co/464254e377754e214be6601234604e28" method="POST" target="hiddenFrame" onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_subject" value="Contato portfólio"></input>
            <input type="hidden" name="_template" value="table"></input>
            <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
            <p className="text-white/60">Se você tem uma ideia, um projeto ou apenas quer trocar uma ideia, estou aqui para ouvir! Entre em contato através de um dos canais disponíveis e vamos conversar.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" name="nome" placeholder="Nome" required />
              <Input type="text" name="sobrenome" placeholder="Sobrenome" required />
              <Input type="email" name="email" placeholder="Email" required />
              <Input type="tel" name="telefone" placeholder="Telefone" required value={phone} onChange={(e) => formatPhoneNumber(e.target.value)} />
            </div>
            <Select value={selectedService} onValueChange={handleSelectChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione um serviço (opcional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Selecione um serviço</SelectLabel>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  <SelectItem value="Logo Design">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <input type="hidden" name="service" value={selectedService} />
            <Textarea name="mensagem" placeholder="Escreva sua mensagem aqui" required className="h-[200px]" />
            <Button type="submit" size="md" className="max-w-40 bg-accent hover:bg-accent-hover">Enviar</Button>
          </form>
          {isPopupVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-primary p-8 rounded-lg shadow-lg text-center">
                <p className="text-lg font-semibold text-white/60 mb-4">
                  Mensagem enviada com sucesso!
                </p>
                <button 
                  onClick={closePopup} 
                  className="px-6 py-2 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition-all"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;
}

export default Contact;