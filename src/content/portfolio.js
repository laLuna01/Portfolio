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
      intro: "Experiência, formação e aprendizado contínuo.",
      labels: {
        eyebrow: "trajetoria.log",
        profileWindow: "perfil.txt",
        experienceEyebrow: "01 / experiencia",
        educationWindow: "formacao.log",
        certificationsWindow: "certificacoes.log",
      },
      personal: {
        title: "Perfil",
        summary: "Sou uma pessoa calma, animada e engajada, movida pelo desejo constante de aprender.",
      },
      experience: {
        title: "Experiência profissional",
        items: [
          {
            company: "Enfermix",
            role: "Suporte de TI e Manutenção",
            period: "2023 - 2024",
          },
          {
            company: "ICV Brasil",
            role: "Suporte e Transformação Digital",
            period: "2023",
          },
        ],
      },
      education: {
        title: "Formação acadêmica",
        items: [
          {
            institution: "FIAP",
            course: "Análise e Desenvolvimento de Sistemas",
            period: "2023 - 2025",
          },
          {
            institution: "ETEC",
            course: "Ensino técnico integrado ao médio (TI)",
            period: "2020 - 2022",
          },
        ],
      },
      certifications: {
        title: "Certificações e cursos",
        items: [
          {
            institution: "HarvardX",
            course: "CS50's Introduction to Computer Science",
            period: "2024",
          },
          {
            institution: "FreeCodeCamp e Microsoft",
            course: "Foundational C# with Microsoft",
            period: "2024",
          },
          {
            institution: "Alura",
            course: "Aprenda a programar em Java com Orientação a Objetos",
            period: "2024",
          },
          {
            institution: "Alura",
            course: "WordPress: crie sites do zero",
            period: "2024",
          },
          {
            institution: "Alura",
            course: "A partir do zero: iniciante em programação",
            period: "2024",
          },
        ],
      },
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
      intro: "Experience, education, and continuous learning.",
      labels: {
        eyebrow: "journey.log",
        profileWindow: "profile.txt",
        experienceEyebrow: "01 / experience",
        educationWindow: "education.log",
        certificationsWindow: "certifications.log",
      },
      personal: {
        title: "Profile",
        summary: "I am a calm, enthusiastic, and engaged person, driven by a constant desire to learn.",
      },
      experience: {
        title: "Professional experience",
        items: [
          {
            company: "Enfermix",
            role: "IT Support and Maintenance",
            period: "2023 - 2024",
          },
          {
            company: "ICV Brasil",
            role: "Support and Digital Transformation",
            period: "2023",
          },
        ],
      },
      education: {
        title: "Academic education",
        items: [
          {
            institution: "FIAP",
            course: "Systems Analysis and Development",
            period: "2023 - 2025",
          },
          {
            institution: "ETEC",
            course: "Integrated technical high school education (IT)",
            period: "2020 - 2022",
          },
        ],
      },
      certifications: {
        title: "Certifications and courses",
        items: [
          {
            institution: "HarvardX",
            course: "CS50's Introduction to Computer Science",
            period: "2024",
          },
          {
            institution: "FreeCodeCamp and Microsoft",
            course: "Foundational C# with Microsoft",
            period: "2024",
          },
          {
            institution: "Alura",
            course: "Learn to program in Java with Object-Oriented Programming",
            period: "2024",
          },
          {
            institution: "Alura",
            course: "WordPress: build websites from scratch",
            period: "2024",
          },
          {
            institution: "Alura",
            course: "From scratch: programming beginner",
            period: "2024",
          },
        ],
      },
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
