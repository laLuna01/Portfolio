const shared = {
  identity: {
    name: "Luana Matos",
    github: "https://github.com/laLuna01",
    linkedin: "https://www.linkedin.com/in/luana-sousa-matos-a00462232/",
    email: "luana.smatos01@gmail.com",
    resumeUrl:
      "https://docs.google.com/document/d/1NLy-xrDUSmtQUOJsvggYuGZ5m_hkEi2xgxiOvyWz9cQ/export?format=pdf",
  },
};

export const supportedLanguages = ["pt", "en"];

export const portfolioContent = {
  pt: {
    ...shared,
    nav: {
      trajectory: "Trajetória",
      skills: "Skills",
      projects: "Projetos",
      contact: "Contato",
      resume: "CV",
    },
    home: {
      role: "Desenvolvedora Fullstack",
      greeting: "Olá, sou Luana Matos.",
      summary: "Conteúdo profissional em revisão.",
    },
    trajectory: {
      title: "Trajetória",
      personal: "Conteúdo pessoal em revisão.",
      experience: [],
      education: [],
      certifications: [],
    },
    skills: { title: "Skills", groups: [] },
    projects: { title: "Projetos", items: [] },
    contact: {
      title: "Contato",
      intro: "Vamos conversar.",
      fields: {
        name: "Nome",
        email: "E-mail",
        subject: "Assunto",
        message: "Mensagem",
        submit: "Enviar",
      },
    },
  },
  en: {
    ...shared,
    nav: {
      trajectory: "Journey",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      resume: "CV",
    },
    home: {
      role: "Fullstack Developer",
      greeting: "Hi, I’m Luana Matos.",
      summary: "Professional content under review.",
    },
    trajectory: {
      title: "Journey",
      personal: "Personal content under review.",
      experience: [],
      education: [],
      certifications: [],
    },
    skills: { title: "Skills", groups: [] },
    projects: { title: "Projects", items: [] },
    contact: {
      title: "Contact",
      intro: "Let’s talk.",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send",
      },
    },
  },
};
