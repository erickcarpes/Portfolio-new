import beasybotFoto1 from "../assets/beasybot/beasybot-foto1.png";
import beasybotFoto2 from "../assets/beasybot/beasybot-foto2.png";
import beasybotFoto3 from "../assets/beasybot/beasybot-foto3.png";
import beasybotFoto4 from "../assets/beasybot/beasybot-foto4.png";
import beasybotFoto5 from "../assets/beasybot/beasybot-foto5.png";
import beasybotFoto6 from "../assets/beasybot/beasybot-foto6.jpeg";
import beasybotFoto7 from "../assets/beasybot/beasybot-foto7.png";
import beasybotFoto8 from "../assets/beasybot/beasybot-foto8.png";

import movieHubFoto1 from "../assets/moviehub/movie_hub-foto1.png";
import movieHubFoto2 from "../assets/moviehub/movie_hub-foto2.png";
import movieHubFoto3 from "../assets/moviehub/movie_hub-foto3.png";

import revforceFoto1 from "../assets/revforce/revforce-foto1.png";
import revforceFoto2 from "../assets/revforce/revforce-foto2.png";
import revforceFoto3 from "../assets/revforce/revforce-foto3.png";
import revforceFoto4 from "../assets/revforce/revforce-foto4.jpg";

export const content = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      tech: "Tech",
      projects: "Projects",
      career: "Career",
      contact: "Contact"
    },
    hero: {
      line1: "Systems that turn",
      word: "chaos",
      line2: "into intelligence.",
      role: "Erick Carpes — Software Engineer"
    },
    about: {
      title: "01. About Me",
      bio1: "I'm a software engineer focused on building scalable, well-architected systems driven by real impact. I have experience with full stack applications, backend architecture, data, and integration of AI-based solutions.",
      bio2: "My work combines solid engineering, attention to user experience, and a focus on maintainability, performance, and long-term product growth."
    },
    tech: {
      title: "My Stack",
      items: [
        { name: "React", url: "https://react.dev", icon: "https://cdn.simpleicons.org/react" },
        { name: "Tanstack", url: "https://tanstack.com", icon: "https://cdn.simpleicons.org/tanstack" },
        { name: "HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "https://cdn.simpleicons.org/html5" },
        { name: "CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "https://cdn.simpleicons.org/css" },
        { name: "TypeScript", url: "https://www.typescriptlang.org", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "Nest.js", url: "https://nestjs.com", icon: "https://cdn.simpleicons.org/nestjs" },
        { name: "Express", url: "https://expressjs.com", icon: "https://cdn.simpleicons.org/express" },
        { name: "Node.js", url: "https://nodejs.org", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Next.js", url: "https://nextjs.org", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "TailwindCSS", url: "https://tailwindcss.com", icon: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "PostgreSQL", url: "https://www.postgresql.org", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "Docker", url: "https://www.docker.com", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Java", url: "https://www.java.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "AWS", url: "https://aws.amazon.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Prisma", url: "https://www.prisma.io", icon: "https://cdn.simpleicons.org/prisma" },
        { name: "Postman", url: "https://www.postman.com", icon: "https://cdn.simpleicons.org/postman" },
        { name: "Figma", url: "https://www.figma.com", icon: "https://cdn.simpleicons.org/figma" },
        { name: "Vite", url: "https://vite.dev", icon: "https://cdn.simpleicons.org/vite" },
        { name: "Git", url: "https://git-scm.com/docs/git", icon: "https://cdn.simpleicons.org/git" },
        { name: "MongoDB", url: "https://www.mongodb.com/docs/", icon: "https://cdn.simpleicons.org/mongodb" }
      ]
    },
    projects: {
      title: "Selected",
      titleSuffix: "Works",
      subtitle: "Featured Projects",
      items: [
        {
          title: "Beasybot",
          description: "An external AI agent that acts as a senior consultant, centralizing and processing all company knowledge — including meeting minutes, documents, and strategic reports. \n\n My responsibilities are full-stack, ranging from backend development with NestJS and PostgreSQL to frontend implementation with React and TailwindCSS. I actively participate in architecture planning, business rule definition, and ensuring a scalable and robust platform, as well as integrating and managing external APIs like OpenAI, n8n, Recall.ai, and Assembly.ai, essential for the product's AI and data processing capabilities.",
          images: [
            beasybotFoto1,
            beasybotFoto2,
            beasybotFoto3,
            beasybotFoto4,
            beasybotFoto5,
            beasybotFoto6,
            beasybotFoto7,
            beasybotFoto8
          ],
          type: "Full Stack Application",
          tech: ["React", "TypeScript", "Nest.js", "PostgreSQL", "Docker", "RAG", "Langchain", "External APIs"],
          status: "live",
          statusLabel: "Live",
          date: "2025",
          demoUrl: "https://app.beasybox.tech",
          githubUrl: "https://github.com/Beasy-Box-Company"
        },
        {
          title: "Movie Hub",
          description: "MovieHub is an interactive web application that consumes The Movie Database (TMDb) API to display a wide variety of popular movies. With a simple and responsive interface, it allows users to: Search for movies by name; View more information about each movie; Explore the most popular movies of the moment.",
          images: [
            movieHubFoto1,
            movieHubFoto2,
            movieHubFoto3
          ],
          type: "Frontend Application",
          tech: ["React", "TypeScript", "TailwindCSS", "Vite", "TMDb API"],
          status: "archived",
          statusLabel: "Archived",
          date: "2025",
          demoUrl: "",
          githubUrl: "https://github.com/erickcarpes/MovieHub"
        },
        {
          title: "Revforce",
          description: "Revforce's main goal is to help companies analyze advertising data from multiple digital channels. The solution proposes centralizing this information and providing customized real-time dashboards, using artificial intelligence to generate strategic insights. \n\n I worked mainly on the application's frontend, being responsible for creating reusable components, custom hooks, and API integrations. I also contributed to database modeling and supported backend development in specific areas, collaborating for technical consistency and integration between system layers.",
          images: [
            revforceFoto1,
            revforceFoto2,
            revforceFoto3,
            revforceFoto4
          ],
          type: "Full Stack Application",
          tech: ["React", "TypeScript", "Python", "PostgreSQL", "Docker", "Shadcn", "TailwindCSS", "External APIs"],
          status: "archived",
          statusLabel: "Archived",
          date: "2025",
          demoUrl: "",
          githubUrl: "https://tools.ages.pucrs.br/plataforma-de-marketing-e-sales-analytics"
        }
      ],
      links: {
        demo: "Live Demo",
        code: "Source Code",
        viewProject: "View Project"
      }
    },
    career: {
      title: "02. My Journey",
      items: [
        {
          company: "Beasybox",
          role: "Full Stack Developer",
          period: "Jun 2025 - Present",
          location: "On-site",
          highlights: [
            "Architected backend with Nest.js + TypeScript using DDD and SOLID principles",
            "Implemented RAG pipeline for corporate data processing and indexing",
            "Built React + Tailwind frontend with focus on UI/UX and accessibility",
            "Integrated Recall.ai, Assembly.ai, and WhatsApp APIs",
            "Managed CI/CD pipelines and PostgreSQL with vector extensions"
          ]
        },
        {
          company: "AGES I (PUCRS)",
          role: "Software Developer | Frontend Focus",
          period: "Feb 2025 - Jun 2025",
          location: "On-site",
          highlights: [
            "Designed interactive BI dashboard with React + TypeScript",
            "Architected modular frontend with Tailwind CSS and Shadcn/ui",
            "Implemented efficient data-fetching with TanStack Query"
          ]
        },
        {
          company: "Preto no Branco & AGES (PUCRS)",
          role: "Extension Program Developer",
          period: "Jul 2024 - Dec 2024",
          location: "On-site",
          highlights: [
            "Delivered 5 complete projects across intensive Agile sprints",
            "Developed full-stack academic management platform with Nest.js + React",
            "Built standalone REST API with Node.js, Express, and MongoDB"
          ]
        }
      ]
    },
    contact: {
      title1: "Let's create",
      title2: "something epic.",
      subtitle: "Have a project in mind? Let's hide the chaos and build the intelligence.",
      rights: "© 2025 Erick Carpes. All rights reserved."
    }
  },
  pt: {
    navbar: {
      home: "Início",
      about: "Sobre",
      tech: "Tech",
      projects: "Projetos",
      career: "Carreira",
      contact: "Contato"
    },
    hero: {
      line1: "Sistemas que transformam",
      word: "caos",
      line2: "em inteligência.",
      role: "Erick Carpes — Engenheiro de Software"
    },
    about: {
      title: "01. Sobre Mim",
      bio1: "Sou engenheiro de software focado em construir sistemas escaláveis, bem arquitetados e orientados a impacto real. Tenho experiência em aplicações full stack, arquitetura backend, dados e integração de soluções baseadas em inteligência artificial.",
      bio2: "Meu trabalho une engenharia sólida, atenção à experiência do usuário e preocupação com manutenibilidade, performance e crescimento do produto ao longo do tempo."
    },
    tech: {
      title: "Minha Stack",
      items: [
        { name: "React", url: "https://react.dev", icon: "https://cdn.simpleicons.org/react" },
        { name: "Tanstack", url: "https://tanstack.com", icon: "https://cdn.simpleicons.org/tanstack" },
        { name: "HTML5", url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML", icon: "https://cdn.simpleicons.org/html5" },
        { name: "CSS3", url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS", icon: "https://cdn.simpleicons.org/css" },
        { name: "TypeScript", url: "https://www.typescriptlang.org", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "JavaScript", url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "Nest.js", url: "https://nestjs.com", icon: "https://cdn.simpleicons.org/nestjs" },
        { name: "Express", url: "https://expressjs.com", icon: "https://cdn.simpleicons.org/express" },
        { name: "Node.js", url: "https://nodejs.org", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Next.js", url: "https://nextjs.org", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
        { name: "TailwindCSS", url: "https://tailwindcss.com", icon: "https://cdn.simpleicons.org/tailwindcss" },
        { name: "PostgreSQL", url: "https://www.postgresql.org", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "Docker", url: "https://www.docker.com", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Java", url: "https://www.java.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "AWS", url: "https://aws.amazon.com", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Prisma", url: "https://www.prisma.io", icon: "https://cdn.simpleicons.org/prisma" },
        { name: "Postman", url: "https://www.postman.com", icon: "https://cdn.simpleicons.org/postman" },
        { name: "Figma", url: "https://www.figma.com", icon: "https://cdn.simpleicons.org/figma" },
        { name: "Vite", url: "https://vite.dev", icon: "https://cdn.simpleicons.org/vite" },
        { name: "Git", url: "https://git-scm.com/docs/git", icon: "https://cdn.simpleicons.org/git" },
        { name: "MongoDB", url: "https://www.mongodb.com/pt-br/docs/", icon: "https://cdn.simpleicons.org/mongodb" }
      ]
    },
    projects: {
      title: "Trabalhos",
      titleSuffix: "Selecionados",
      subtitle: "Projetos em Destaque",
      items: [
        {
          title: "Beasybot",
          description: "Um agente de IA externo que atua como um consultor sênior, centralizando e processando todo o conhecimento da empresa — incluindo atas de reuniões, documentos e relatórios estratégicos. \n\n Minhas responsabilidades são full-stack, indo do desenvolvimento backend com NestJS e PostgreSQL à implementação do frontend com React e TailwindCSS. Participo ativamente do planejamento da arquitetura, da definição das regras de negócio e da garantia de uma plataforma escalável e robusta, além de integrar e gerenciar APIs externas como OpenAI, n8n, Recall.ai e Assembly.ai, essenciais para as capacidades de IA e processamento de dados do produto.",
          images: [
            beasybotFoto1,
            beasybotFoto2,
            beasybotFoto3,
            beasybotFoto4,
            beasybotFoto5,
            beasybotFoto6,
            beasybotFoto7,
            beasybotFoto8
          ],
          type: "Aplicação Full Stack",
          tech: ["React", "TypeScript", "Nest.js", "PostgreSQL", "Docker", "RAG", "Langchain", "External APIs"],
          status: "live",
          statusLabel: "No Ar",
          date: "2025",
          demoUrl: "https://app.beasybox.tech",
          githubUrl: "https://github.com/Beasy-Box-Company"
        },
        {
          title: "Movie Hub",
          description: "MovieHub é uma aplicação web interativa que consome a API do The Movie Database (TMDb) para exibir uma ampla variedade de filmes populares. Com uma interface simples e responsiva, permite ao usuário: Buscar filmes por nome; Visualizar mais informações de cada filme; Explorar os filmes mais populares do momento.",
          images: [
            movieHubFoto1,
            movieHubFoto2,
            movieHubFoto3
          ],
          type: "Aplicação Frontend",
          tech: ["React", "TypeScript", "TailwindCSS", "Vite", "TMDb API"],
          status: "archived",
          statusLabel: "Arquivado",
          date: "2025",
          demoUrl: "",
          githubUrl: "https://github.com/erickcarpes/MovieHub"
        },
        {
          title: "Revforce",
          description: "A Revforce tem como objetivo principal auxiliar empresas na análise de dados publicitários de múltiplos canais digitais. A solução propõe centralizar essas informações e fornecer dashboards personalizados em tempo real, utilizando inteligência artificial para gerar insights estratégicos. \n\n Atuei majoritariamente no frontend da aplicação, sendo responsável pela criação de componentes reutilizáveis, hooks personalizados e integrações com APIs. Também contribuí para a modelagem do banco de dados e apoiei o desenvolvimento backend em pontos específicos, colaborando para a consistência técnica e a integração entre as camadas do sistema.",
          images: [
            revforceFoto1,
            revforceFoto2,
            revforceFoto3,
            revforceFoto4
          ],
          type: "Aplicação Full Stack",
          tech: ["React", "TypeScript", "Python", "PostgreSQL", "Docker", "Shadcn", "TailwindCSS", "External APIs"],
          status: "archived",
          statusLabel: "Arquivado",
          date: "2025",
          demoUrl: "",
          githubUrl: "https://tools.ages.pucrs.br/plataforma-de-marketing-e-sales-analytics"
        }
      ],
      links: {
        demo: "Ver Demo",
        code: "Código Fonte",
        viewProject: "Ver Projeto"
      }
    },
    career: {
      title: "02. Minha Jornada",
      items: [
        {
          company: "Beasybox",
          role: "Desenvolvedor Full Stack",
          period: "Jun 2025 - Presente",
          location: "Presencial",
          highlights: [
            "Arquitetei backend com Nest.js + TypeScript usando DDD e princípios SOLID",
            "Implementei pipeline RAG para processamento e indexação de dados corporativos",
            "Construí frontend React + Tailwind com foco em UI/UX e acessibilidade",
            "Integrei APIs da Recall.ai, Assembly.ai e WhatsApp",
            "Gerenciei pipelines CI/CD e PostgreSQL com extensões vetoriais"
          ]
        },
        {
          company: "AGES I (PUCRS)",
          role: "Desenvolvedor de Software | Foco em Frontend",
          period: "Fev 2025 - Jun 2025",
          location: "Presencial",
          highlights: [
            "Projetei dashboard interativo de BI com React + TypeScript",
            "Arquitetei frontend modular com Tailwind CSS e Shadcn/ui",
            "Implementei data-fetching eficiente com TanStack Query"
          ]
        },
        {
          company: "Preto no Branco & AGES (PUCRS)",
          role: "Desenvolvedor em Programa de Extensão",
          period: "Jul 2024 - Dez 2024",
          location: "Presencial",
          highlights: [
            "Entreguei 5 projetos completos em sprints Ágeis intensivas",
            "Desenvolvi plataforma full-stack de gestão acadêmica com Nest.js + React",
            "Construí API REST autônoma com Node.js, Express e MongoDB"
          ]
        }
      ]
    },
    contact: {
      title1: "Vamos criar",
      title2: "algo épico.",
      subtitle: "Tem um projeto em mente? Vamos esconder o caos e construir a inteligência.",
      rights: "© 2025 Erick Carpes. Todos os direitos reservados."
    }
  }
};
