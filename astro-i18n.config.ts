import { defineAstroI18nConfig } from 'astro-i18n';

export default defineAstroI18nConfig({
  primaryLocale: 'en', // default app locale
  secondaryLocales: ['pt', 'es'], // other supported locales
  fallbackLocale: 'en', // fallback locale (on missing translation)
  trailingSlash: 'never', // "never" or "always"
  run: 'client+server', // "client+server" or "server"
  showPrimaryLocale: false, // "/en/about" vs "/about"
  translationLoadingRules: [], // per page group loading
  translationDirectory: {}, // translation directory names
  translations: {
    common: {
      en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'nav.blog': 'Blog',
        description:
          'Full Stack Developer & Software Consultant specializing in modern, scalable web solutions and agile development consulting.',
        footer: {
          copyright: 'Gabriel Lima. All rights reserved.',
          email: 'Email',
          linkedin: 'LinkedIn',
        },
      },
      pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.portfolio': 'Portfólio',
        'nav.contact': 'Contato',
        'nav.blog': 'Blog',
        description:
          'Desenvolvedor Full Stack & Consultor de Software especializado em soluções web modernas e escaláveis e consultoria em desenvolvimento ágil.',
        footer: {
          copyright: 'Gabriel Lima. Todos os direitos reservados.',
          email: 'Email',
          linkedin: 'LinkedIn',
        },
      },
      es: {
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.portfolio': 'Portafolio',
        'nav.contact': 'Contacto',
        'nav.blog': 'Blog',
        description:
          'Desarrollador Full Stack & Consultor de Software especializado en soluciones web modernas y escalables y consultoría en desarrollo ágil.',
        footer: {
          copyright: 'Gabriel Lima. Todos los derechos reservados.',
          email: 'Email',
          linkedin: 'LinkedIn',
        },
      },
    },
    '/': {
      en: {
        meta: {
          title: 'Gabriel Lima | Full Stack Developer & Software Consultant',
          description:
            'Full Stack Developer specialized in creating modern, scalable, and high-performance web solutions. Software architecture and agile development consulting.',
        },
        hero: {
          title: 'Transforming Ideas into',
          title_highlight: 'Digital Solutions',
          description:
            'Full Stack Development & Software Consulting for companies seeking technical excellence and exceptional results.',
        },
        services: {
          title: 'Specialized Services',
          fullstack: {
            title: 'Full Stack Development',
            description:
              'Creation of complete web applications, from frontend to backend, focusing on performance and scalability.',
          },
          consulting: {
            title: 'Technical Consulting',
            description:
              'Strategic guidance on software architecture, technology choices, and development best practices.',
          },
          optimization: {
            title: 'Performance Optimization',
            description:
              'Analysis and implementation of improvements to increase the speed and efficiency of existing applications.',
          },
        },
        cta: {
          start: 'Start Project',
          portfolio: 'View Portfolio',
          title: 'Ready to transform your project into reality?',
          description: 'Get in touch to discuss how I can help achieve your technological goals.',
          button: 'Schedule Free Consultation',
        },
      },
      pt: {
        meta: {
          title: 'Gabriel Lima | Desenvolvedor Full Stack & Consultor de Software',
          description:
            'Desenvolvedor Full Stack especializado em criar soluções web modernas, escaláveis e de alta performance. Consultoria em arquitetura de software e desenvolvimento ágil.',
        },
        hero: {
          title: 'Transformando Ideias em',
          title_highlight: 'Soluções Digitais',
          description:
            'Desenvolvimento Full Stack & Consultoria em Software para empresas que buscam excelência técnica e resultados excepcionais.',
        },
        services: {
          title: 'Serviços Especializados',
          fullstack: {
            title: 'Desenvolvimento Full Stack',
            description:
              'Criação de aplicações web completas, desde o frontend até o backend, com foco em performance e escalabilidade.',
          },
          consulting: {
            title: 'Consultoria Técnica',
            description:
              'Orientação estratégica em arquitetura de software, escolha de tecnologias e melhores práticas de desenvolvimento.',
          },
          optimization: {
            title: 'Otimização de Performance',
            description:
              'Análise e implementação de melhorias para aumentar a velocidade e eficiência de aplicações existentes.',
          },
        },
        cta: {
          start: 'Iniciar Projeto',
          portfolio: 'Ver Portfólio',
          title: 'Pronto para transformar seu projeto em realidade?',
          description:
            'Entre em contato para discutirmos como posso ajudar a alcançar seus objetivos tecnológicos.',
          button: 'Agendar Consulta Gratuita',
        },
      },
      es: {
        meta: {
          title: 'Gabriel Lima | Desarrollador Full Stack & Consultor de Software',
          description:
            'Desarrollador Full Stack especializado en crear soluciones web modernas, escalables y de alto rendimiento. Consultoría en arquitectura de software y desarrollo ágil.',
        },
        hero: {
          title: 'Transformando Ideas en',
          title_highlight: 'Soluciones Digitales',
          description:
            'Desarrollo Full Stack & Consultoría de Software para empresas que buscan excelencia técnica y resultados excepcionales.',
        },
        services: {
          title: 'Servicios Especializados',
          fullstack: {
            title: 'Desarrollo Full Stack',
            description:
              'Creación de aplicaciones web completas, desde el frontend hasta el backend, con enfoque en rendimiento y escalabilidad.',
          },
          consulting: {
            title: 'Consultoría Técnica',
            description:
              'Orientación estratégica en arquitectura de software, elección de tecnologías y mejores prácticas de desarrollo.',
          },
          optimization: {
            title: 'Optimización de Rendimiento',
            description:
              'Análisis e implementación de mejoras para aumentar la velocidad y eficiencia de aplicaciones existentes.',
          },
        },
        cta: {
          start: 'Iniciar Proyecto',
          portfolio: 'Ver Portafolio',
          title: '¿Listo para transformar tu proyecto en realidad?',
          description:
            'Contáctame para discutir cómo puedo ayudarte a alcanzar tus objetivos tecnológicos.',
          button: 'Agendar Consulta Gratuita',
        },
      },
    },
    '/about': {
      en: {
        meta: {
          title: 'About | Gabriel Lima',
          description:
            'Learn more about my journey, expertise, and approach to software development and consulting.',
        },
        hero: {
          title: 'About Me',
          description:
            'Full Stack Developer and Software Consultant with a passion for creating efficient, scalable solutions.',
        },
        experience: {
          title: 'Professional Experience',
          description:
            'Over a decade of experience in software development and technical consulting.',
        },
        skills: {
          title: 'Technical Skills',
          frontend: 'Frontend Development',
          backend: 'Backend Development',
          cloud: 'Cloud Architecture',
          devops: 'DevOps & CI/CD',
        },
      },
      pt: {
        meta: {
          title: 'Sobre | Gabriel Lima',
          description:
            'Saiba mais sobre minha jornada, experiência e abordagem em desenvolvimento de software e consultoria.',
        },
        hero: {
          title: 'Sobre Mim',
          description:
            'Desenvolvedor Full Stack e Consultor de Software com paixão por criar soluções eficientes e escaláveis.',
        },
        experience: {
          title: 'Experiência Profissional',
          description:
            'Mais de uma década de experiência em desenvolvimento de software e consultoria técnica.',
        },
        skills: {
          title: 'Habilidades Técnicas',
          frontend: 'Desenvolvimento Frontend',
          backend: 'Desenvolvimento Backend',
          cloud: 'Arquitetura em Nuvem',
          devops: 'DevOps & CI/CD',
        },
      },
      es: {
        meta: {
          title: 'Sobre Mí | Gabriel Lima',
          description:
            'Conoce más sobre mi trayectoria, experiencia y enfoque en desarrollo de software y consultoría.',
        },
        hero: {
          title: 'Sobre Mí',
          description:
            'Desarrollador Full Stack y Consultor de Software con pasión por crear soluciones eficientes y escalables.',
        },
        experience: {
          title: 'Experiencia Profesional',
          description:
            'Más de una década de experiencia en desarrollo de software y consultoría técnica.',
        },
        skills: {
          title: 'Habilidades Técnicas',
          frontend: 'Desarrollo Frontend',
          backend: 'Desarrollo Backend',
          cloud: 'Arquitectura en la Nube',
          devops: 'DevOps & CI/CD',
        },
      },
    },
    '/portfolio': {
      en: {
        meta: {
          title: 'Portfolio | Gabriel Lima',
          description: 'Explore my portfolio of web development and software consulting projects.',
        },
        hero: {
          title: 'Portfolio',
          description: 'A selection of my most recent and impactful projects.',
        },
        projects: {
          title: 'Featured Projects',
          view_project: 'View Project',
          technologies: 'Technologies Used',
        },
      },
      pt: {
        meta: {
          title: 'Portfólio | Gabriel Lima',
          description:
            'Explore meu portfólio de projetos de desenvolvimento web e consultoria de software.',
        },
        hero: {
          title: 'Portfólio',
          description: 'Uma seleção dos meus projetos mais recentes e impactantes.',
        },
        projects: {
          title: 'Projetos em Destaque',
          view_project: 'Ver Projeto',
          technologies: 'Tecnologias Utilizadas',
        },
      },
      es: {
        meta: {
          title: 'Portafolio | Gabriel Lima',
          description:
            'Explora mi portafolio de proyectos de desarrollo web y consultoría de software.',
        },
        hero: {
          title: 'Portafolio',
          description: 'Una selección de mis proyectos más recientes e impactantes.',
        },
        projects: {
          title: 'Proyectos Destacados',
          view_project: 'Ver Proyecto',
          technologies: 'Tecnologías Utilizadas',
        },
      },
    },
    '/contact': {
      en: {
        meta: {
          title: 'Contact | Gabriel Lima',
          description: 'Get in touch to discuss your project or software development needs.',
        },
        hero: {
          title: 'Contact Me',
          description: "Let's discuss how I can help with your project.",
        },
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send Message',
          success: 'Message sent successfully!',
          error: 'Error sending message. Please try again.',
          availability: {
            title: 'Project Availability',
            description: 'Currently available for:',
            services: 'Software Development Consulting, Full Stack Development Projects, Technical Mentoring, Talks and Workshops',
            response_time: 'I will respond to your message as soon as possible, usually within 24 business hours.'
          }
        },
      },
      pt: {
        meta: {
          title: 'Contato | Gabriel Lima',
          description:
            'Entre em contato para discutir seu projeto ou necessidades de desenvolvimento de software.',
        },
        hero: {
          title: 'Contato',
          description: 'Vamos discutir como posso ajudar com seu projeto.',
        },
        form: {
          name: 'Nome',
          email: 'Email',
          message: 'Mensagem',
          submit: 'Enviar Mensagem',
          success: 'Mensagem enviada com sucesso!',
          error: 'Erro ao enviar mensagem. Por favor, tente novamente.',
          availability: {
            title: 'Disponibilidade para Projetos',
            description: 'Atualmente estou disponível para:',
            services: 'Consultoria em desenvolvimento de software, Projetos de desenvolvimento full stack, Mentorias técnicas, Palestras e workshops',
            response_time: 'Responderei sua mensagem o mais breve possível, geralmente dentro de 24 horas úteis.'
          }
        },
      },
      es: {
        meta: {
          title: 'Contacto | Gabriel Lima',
          description:
            'Contáctame para discutir tu proyecto o necesidades de desarrollo de software.',
        },
        hero: {
          title: 'Contacto',
          description: 'Hablemos sobre cómo puedo ayudar con tu proyecto.',
        },
        form: {
          name: 'Nombre',
          email: 'Email',
          message: 'Mensaje',
          submit: 'Enviar Mensaje',
          success: '¡Mensaje enviado con éxito!',
          error: 'Error al enviar mensaje. Por favor, intenta nuevamente.',
          availability: {
            title: 'Disponibilidad para Proyectos',
            description: 'Actualmente disponible para:',
            services: 'Consultoría en desarrollo de software, Proyectos de desarrollo full stack, Mentorías técnicas, Charlas y talleres',
            response_time: 'Responderé a tu mensaje lo antes posible, generalmente dentro de las 24 horas hábiles.'
          }
        },
      },
    },
    '/blog': {
      en: {
        meta: {
          title: 'Blog | Gabriel Lima',
          description:
            'Technical articles and insights about software development, web technologies, and best practices.',
        },
        hero: {
          title: 'Blog',
          description: 'Thoughts and insights about software development and technology.',
        },
        posts: {
          read_more: 'Read More',
          published_on: 'Published on',
        },
        categories: {
          title: 'Categories',
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
        },
        tags: {
          title: 'Tags',
        },
      },
      pt: {
        meta: {
          title: 'Blog | Gabriel Lima',
          description:
            'Artigos técnicos e insights sobre desenvolvimento de software, tecnologias web e melhores práticas.',
        },
        hero: {
          title: 'Blog',
          description: 'Reflexões e insights sobre desenvolvimento de software e tecnologia.',
        },
        posts: {
          read_more: 'Ler Mais',
          published_on: 'Publicado em',
        },
        categories: {
          title: 'Categorias',
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
        },
        tags: {
          title: 'Tags',
        },
      },
      es: {
        meta: {
          title: 'Blog | Gabriel Lima',
          description:
            'Artículos técnicos e insights sobre desarrollo de software, tecnologías web y mejores prácticas.',
        },
        hero: {
          title: 'Blog',
          description: 'Reflexiones e insights sobre desarrollo de software y tecnología.',
        },
        posts: {
          read_more: 'Leer Más',
          published_on: 'Publicado el',
        },
        categories: {
          title: 'Categorías',
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps',
        },
        tags: {
          title: 'Etiquetas',
        },
      },
    },
  },
  routes: {
    pt: {
      about: 'sobre',
      contact: 'contato',
      portfolio: 'portfolio',
      blog: 'blog',
    },
    es: {
      about: 'sobre',
      contact: 'contacto',
      portfolio: 'portafolio',
      blog: 'blog',
    },
    en: {
      about: 'about',
      contact: 'contact',
      portfolio: 'portfolio',
      blog: 'blog',
    },
  },
});
