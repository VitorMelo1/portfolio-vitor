export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'fullstack';
  year: number;
}

export const projects: Project[] = [
  {
    id: 'pulsetap',
    title: 'PulseTap',
    description: 'Aplicação web inovadora para monitoramento de batimentos cardíacos em tempo real, com interface intuitiva e design futurista. Integra com dispositivos wearables e oferece análises detalhadas de saúde cardiovascular.',
    shortDescription: 'Monitoramento cardíaco em tempo real com IA',
    image: '/images/projetos/pulsetap.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
    githubUrl: 'https://github.com/VitorMelo1/pulsetap',
    liveUrl: 'https://pulsetap.vercel.app',
    featured: true,
    category: 'web',
    year: 2024
  },
  // {
  //   id: 'unistage',
  //   title: 'UniStage',
  //   description: 'Plataforma educacional completa para universidades, oferecendo gestão de estágios, conexão entre estudantes e empresas, e ferramentas de acompanhamento acadêmico com dashboard interativo.',
  //   shortDescription: 'Plataforma de gestão de estágios universitários',
  //   image: '/images/projetos/unistage.png',
  //   technologies: ['React', 'TypeScript', 'SCSS', 'Firebase', 'Material-UI', 'React Router'],
  //   githubUrl: 'https://github.com/VitorMelo1/unistage',
  //   liveUrl: 'https://unistage.vercel.app',
  //   featured: true,
  //   category: 'web',
  //   year: 2024
  // },
  {
    id: 'etek',
    title: 'E-Tek',
    description: 'E-commerce especializado em produtos tecnológicos com design moderno, carrinho de compras avançado, sistema de pagamento integrado e experiência de usuário otimizada para dispositivos móveis.',
    shortDescription: 'E-commerce de produtos tecnológicos',
    image: '/images/projetos/etek.png',
    technologies: ['React', 'JavaScript', 'SCSS', 'Stripe', 'Redux', 'Axios'],
    githubUrl: 'https://github.com/VitorMelo1/E-Tek-FrontEnd',
    liveUrl: 'https://e-tek.vercel.app',
    featured: true,
    category: 'web',
    year: 2023
  },
  {
    id: 'laceup',
    title: 'LaceUp',
    description: 'Aplicação mobile para entusiastas de tênis, oferecendo catálogo interativo, sistema de reviews, notificações de lançamentos e comunidade de colecionadores com design responsivo.',
    shortDescription: 'App para colecionadores de tênis',
    image: '/images/projetos/laceup.png',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo', 'React Navigation', 'AsyncStorage'],
    githubUrl: 'https://github.com/VitorMelo1/laceup',
    featured: true,
    category: 'mobile',
    year: 2024
  },
  {
    id: 'portfolio-vitor',
    title: 'Portfólio Vitor',
    description: 'Portfólio pessoal com design futurista, animações avançadas, tema dark, responsividade total e experiência de usuário moderna inspirada em Discord e GitHub.',
    shortDescription: 'Portfólio pessoal com design futurista',
    image: '/images/projetos/portfolio.png',
    technologies: ['React', 'TypeScript', 'SCSS', 'Framer Motion', 'Swiper', 'Lucide'],
    githubUrl: 'https://github.com/VitorMelo1/portfolio-vitor',
    liveUrl: 'https://vitor-melo.vercel.app',
    featured: false,
    category: 'web',
    year: 2024
  },
  // {
  //   id: 'task-manager',
  //   title: 'Task Manager Pro',
  //   description: 'Sistema de gerenciamento de tarefas com drag & drop, categorização inteligente, lembretes, estatísticas e sincronização em tempo real entre dispositivos.',
  //   shortDescription: 'Gerenciador de tarefas com drag & drop',
  //   image: '/images/projetos/task-manager.png',
  //   technologies: ['React', 'TypeScript', 'SCSS', 'DND Kit', 'LocalStorage', 'Chart.js'],
  //   githubUrl: 'https://github.com/VitorMelo1/task-manager',
  //   liveUrl: 'https://task-manager-pro.vercel.app',
  //   featured: false,
  //   category: 'web',
  //   year: 2024
  // },
  // {
  //   id: 'weather-app',
  //   title: 'Weather App',
  //   description: 'Aplicativo de previsão do tempo com interface elegante, dados em tempo real, localização automática, histórico de cidades e gráficos interativos de temperatura.',
  //   shortDescription: 'App de previsão do tempo elegante',
  //   image: '/images/projetos/weather-app.png',
  //   technologies: ['React', 'JavaScript', 'SCSS', 'OpenWeather API', 'Geolocation', 'Chart.js'],
  //   githubUrl: 'https://github.com/VitorMelo1/weather-app',
  //   liveUrl: 'https://weather-app-vitor.vercel.app',
  //   featured: false,
  //   category: 'web',
  //   year: 2023
  // },
  // {
  //   id: 'chat-app',
  //   title: 'Chat App',
  //   description: 'Aplicação de chat em tempo real com interface moderna, emojis, envio de arquivos, notificações push e design responsivo para desktop e mobile.',
  //   shortDescription: 'Chat em tempo real com interface moderna',
  //   image: '/images/projetos/chat-app.png',
  //   technologies: ['React', 'TypeScript', 'Socket.io', 'SCSS', 'Emoji Picker', 'File Upload'],
  //   githubUrl: 'https://github.com/VitorMelo1/chat-app',
  //   liveUrl: 'https://chat-app-vitor.vercel.app',
  //   featured: false,
  //   category: 'web',
  //   year: 2024
  // },
  {
    id: 'lista-de-compras',
    title: 'Lista de Compras',
    description: 'Aplicação web para gerenciar listas de compras. Permite adicionar, marcar como comprado e remover itens, com atualização dinâmica e interface responsiva. Ideal para praticar manipulação de DOM, arrays e localStorage.',
    shortDescription: 'Gerencie sua lista de compras de forma simples e prática.',
    image: '/images/projetos/lista-de-compras.png',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Font Awesome', 'Google Fonts'],
    githubUrl: 'https://github.com/VitorMelo1/lista-de-compras',
    liveUrl: 'https://vitormelo1.github.io/lista-de-compras/',
    featured: true,
    category: 'web',
    year: 2023
  },
  {
    id: 'serenatto-cafe',
    title: 'Serenatto Café',
    description: 'Site institucional de cafeteria com design moderno e responsivo. Utiliza SCSS para modularização dos estilos, facilitando manutenção e escalabilidade. Ótimo exemplo de hierarquia visual e boas práticas de pré-processadores CSS.',
    shortDescription: 'Site moderno para cafeteria, focado em design e responsividade.',
    image: '/images/projetos/serenatto-cafe.png',
    technologies: ['SCSS', 'HTML5', 'CSS3', 'CSS Grid', 'Flexbox'],
    githubUrl: 'https://github.com/VitorMelo1/serenatto-cafe',
    liveUrl: 'https://vitormelo1.github.io/serenatto-cafe/',
    featured: true,
    category: 'web',
    year: 2023
  },
  {
    id: 'portifolio',
    title: 'Portfólio',
    description: 'Portfólio pessoal estático, apresentando seus principais projetos e habilidades. Estrutura semântica bem organizada, ideal para destacar seu trabalho e facilitar a navegação de recrutadores e visitantes.',
    shortDescription: 'Portfólio pessoal estático e organizado.',
    image: '/images/projetos/portifolio.png',
    technologies: ['HTML5', 'CSS3'],
    githubUrl: 'https://github.com/VitorMelo1/portifolio',
    liveUrl: 'https://vitormelo1.github.io/portifolio/',
    featured: true,
    category: 'web',
    year: 2023
  },
  {
    id: 'use-dev',
    title: 'Use‑Dev',
    description: 'Landing page para desenvolvedores, com layout limpo, responsivo e foco em semântica. Utiliza grid ou flexbox para organização dos elementos, proporcionando uma experiência agradável e moderna.',
    shortDescription: 'Landing page para devs, com layout limpo e responsivo.',
    image: '/images/projetos/use-dev.png',
    technologies: ['HTML5', 'CSS3'],
    githubUrl: 'https://github.com/VitorMelo1/use-dev',
    liveUrl: 'https://vitormelo1.github.io/use-dev/',
    featured: true,
    category: 'web',
    year: 2023
  },
  {
    id: 'reserva-sala',
    title: 'Reserva de Sala',
    description: 'Sistema de reservas de salas com formulário validado por TypeScript. Permite selecionar horários disponíveis, valida entradas e oferece feedback ao usuário. Ideal para treinar lógica de formulários, tipagem e interatividade com DOM.',
    shortDescription: 'Sistema de reservas de salas com validação.',
    image: '/images/projetos/reserva-sala.png',
    technologies: ['TypeScript', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/VitorMelo1/reserva-sala',
    liveUrl: 'https://vitormelo1.github.io/reserva-sala/',
    featured: true,
    category: 'web',
    year: 2023
  },
  // {
  //   id: 'vmello-website',
  //   title: 'Vmello Website',
  //   description: 'Site pessoal moderno, desenvolvido com Astro e deploy automatizado via GitHub Actions e Vercel. Design responsivo, geração estática de páginas e uso de Tailwind CSS para estilização rápida e eficiente. Exemplo de integração de CI/CD e melhores práticas de desenvolvimento web moderno.',
  //   shortDescription: 'Site pessoal moderno com Astro e Tailwind.',
  //   image: '/images/projetos/vmello-website.png',
  //   technologies: ['Astro', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'GitHub Actions', 'Vercel'],
  //   githubUrl: 'https://github.com/VitorMelo1/vmello-website',
  //   liveUrl: 'https://vitormelo1.github.io/vmello-website/',
  //   featured: true,
  //   category: 'web',
  //   year: 2023
  // },
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
}; 