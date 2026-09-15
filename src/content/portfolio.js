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
    skills: {
      title: "Skills",
      intro: "Tecnologias organizadas pelas camadas em que atuam.",
      label: "competencias.sys",
      groups: [
        {
          number: "01",
          label: "frontend.layer",
          title: "Frontend",
          description: "Interfaces e experiência no navegador.",
          items: ["HTML5", "CSS3", "JavaScript", "Typescript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
        },
        {
          number: "02",
          label: "backend.layer",
          title: "Backend",
          description: "Serviços, regras e integrações.",
          items: ["Node.js", "Kotlin", "Python", "Java", "C#", "Spring Boot", ".NET"],
        },
        {
          number: "03",
          label: "dados.layer",
          title: "Dados",
          description: "Persistência, consulta e processamento.",
          items: ["SQL", "Firebase"],
        },
        {
          number: "04",
          label: "infraestrutura.layer",
          title: "Infraestrutura",
          description: "Ambientes e empacotamento.",
          items: ["Docker"],
        },
        {
          number: "05",
          label: "ferramentas.layer",
          title: "Ferramentas",
          description: "Design e gestão de conteúdo.",
          items: ["Figma", "Wordpress"],
        },
      ],
    },
    projects: {
      title: "Projetos",
      intro: "Projetos que reúnem diferentes camadas de desenvolvimento.",
      label: "projetos.dir",
      labels: {
        technologies: "Tecnologias",
        repository: "Repositório",
        demo: "Ver projeto",
      },
      items: [
        {
          number: "01",
          category: "FullStack",
          title: "EcoVolt",
          description: "Previsão e controle de geração e consumo de energia. A solução busca mitigar os desafios do acesso à energia renovável confiável devido à imprevisibilidade climática e de demanda, facilitando a transição energética para sistemas renováveis.",
          tags: ["Java", "Spring Boot", "Kotlin", "PL/SQL", "Python", "Scikit-learn", "Firebase"],
          image: "/assets/work/thumb1.png",
          imageAlt: "Prévia do projeto EcoVolt",
          live: "",
          github: "https://github.com/laLuna01/EcoVoltJava",
        },
        {
          number: "02",
          category: "BackEnd",
          title: "GetCards",
          description: "O projeto automatiza a coleta de dados sobre um conjunto de cartas no site Scryfall. Ele navega entre os links, extrai o título e a descrição de cada uma, e gera um arquivo de texto contendo as informações coletadas. O código utiliza processamento paralelo para melhorar o desempenho, garantindo rapidez e eficiência na execução.",
          tags: ["C#", ".NET", "HtmlAgilityPack"],
          image: "/assets/work/thumb2.png",
          imageAlt: "Prévia do projeto GetCards",
          live: "",
          github: "https://github.com/laLuna01/GetCards_CP",
        },
        {
          number: "03",
          category: "FrontEnd",
          title: "Nike Page",
          description: "Este projeto faz parte do meu aprendizado em Tailwind CSS. A landing page apresenta um design minimalista e visualmente atrativo, inspirado no estilo da marca Nike. O foco principal foi explorar a customização de componentes, aplicar boas práticas de UI/UX e garantir responsividade em diferentes dispositivos.",
          tags: ["HTML5", "CSS3", "Next.js", "Tailwind CSS"],
          image: "/assets/work/thumb3.png",
          imageAlt: "Prévia do projeto Nike Page",
          live: "https://nike-tailwind-phi.vercel.app/",
          github: "https://github.com/laLuna01/Nike_Tailwind",
        },
        {
          number: "04",
          category: "FullStack",
          title: "Salesforce ++",
          description: "Portal acessível e inclusivo da Salesforce, com navegação simples, intuitiva e visualmente limpa. Foi criado para atender a necessidades de acessibilidade, como: suporte aos espectros do daltonismo, ajuste de tamanhos de texto e elementos, compatibilidade com leitores de tela e uso de uma linguagem mais simples e objetiva.",
          tags: ["HTML5", "CSS3", "Next.js", "Java", "SQL"],
          image: "/assets/work/thumb4.png",
          imageAlt: "Prévia do projeto Salesforce ++",
          live: "https://salesforce-challenge-kohl.vercel.app/",
          github: "https://github.com/laLuna01/Salesforce-Challenge",
        },
      ],
    },
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
    skills: {
      title: "Skills",
      intro: "Technologies organized by the layers where they operate.",
      label: "skills.sys",
      groups: [
        {
          number: "01",
          label: "frontend.layer",
          title: "Frontend",
          description: "Interfaces and browser experiences.",
          items: ["HTML5", "CSS3", "JavaScript", "Typescript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
        },
        {
          number: "02",
          label: "backend.layer",
          title: "Backend",
          description: "Services, rules, and integrations.",
          items: ["Node.js", "Kotlin", "Python", "Java", "C#", "Spring Boot", ".NET"],
        },
        {
          number: "03",
          label: "data.layer",
          title: "Data",
          description: "Persistence, querying, and processing.",
          items: ["SQL", "Firebase"],
        },
        {
          number: "04",
          label: "infrastructure.layer",
          title: "Infrastructure",
          description: "Environments and packaging.",
          items: ["Docker"],
        },
        {
          number: "05",
          label: "tools.layer",
          title: "Tools",
          description: "Design and content management.",
          items: ["Figma", "Wordpress"],
        },
      ],
    },
    projects: {
      title: "Projects",
      intro: "Projects that bring together different development layers.",
      label: "projects.dir",
      labels: {
        technologies: "Technologies",
        repository: "Repository",
        demo: "View project",
      },
      items: [
        {
          number: "01",
          category: "FullStack",
          title: "EcoVolt",
          description: "Forecasting and control of energy generation and consumption. The solution seeks to mitigate the challenges of access to reliable renewable energy caused by unpredictable weather and demand, supporting the transition to renewable systems.",
          tags: ["Java", "Spring Boot", "Kotlin", "PL/SQL", "Python", "Scikit-learn", "Firebase"],
          image: "/assets/work/thumb1.png",
          imageAlt: "Preview of the EcoVolt project",
          live: "",
          github: "https://github.com/laLuna01/EcoVoltJava",
        },
        {
          number: "02",
          category: "BackEnd",
          title: "GetCards",
          description: "The project automates data collection for a set of cards on the Scryfall website. It navigates through links, extracts each title and description, and generates a text file with the collected information. The code uses parallel processing to improve performance and execution speed.",
          tags: ["C#", ".NET", "HtmlAgilityPack"],
          image: "/assets/work/thumb2.png",
          imageAlt: "Preview of the GetCards project",
          live: "",
          github: "https://github.com/laLuna01/GetCards_CP",
        },
        {
          number: "03",
          category: "FrontEnd",
          title: "Nike Page",
          description: "This project is part of my Tailwind CSS learning. The landing page presents a minimalist, visually appealing design inspired by Nike's style. The main focus was exploring component customization, applying UI/UX practices, and ensuring responsiveness across devices.",
          tags: ["HTML5", "CSS3", "Next.js", "Tailwind CSS"],
          image: "/assets/work/thumb3.png",
          imageAlt: "Preview of the Nike Page project",
          live: "https://nike-tailwind-phi.vercel.app/",
          github: "https://github.com/laLuna01/Nike_Tailwind",
        },
        {
          number: "04",
          category: "FullStack",
          title: "Salesforce ++",
          description: "An accessible and inclusive Salesforce portal with simple, intuitive, and visually clean navigation. It was created to address accessibility needs including color-vision settings, adjustable text and element sizes, screen-reader compatibility, and simpler, more direct language.",
          tags: ["HTML5", "CSS3", "Next.js", "Java", "SQL"],
          image: "/assets/work/thumb4.png",
          imageAlt: "Preview of the Salesforce ++ project",
          live: "https://salesforce-challenge-kohl.vercel.app/",
          github: "https://github.com/laLuna01/Salesforce-Challenge",
        },
      ],
    },
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
