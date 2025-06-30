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
  {
    id: 'unistage',
    title: 'UniStage',
    description: 'Plataforma educacional completa para universidades, oferecendo gestão de estágios, conexão entre estudantes e empresas, e ferramentas de acompanhamento acadêmico com dashboard interativo.',
    shortDescription: 'Plataforma de gestão de estágios universitários',
    image: '/images/projetos/unistage.png',
    technologies: ['React', 'TypeScript', 'SCSS', 'Firebase', 'Material-UI', 'React Router'],
    githubUrl: 'https://github.com/VitorMelo1/unistage',
    liveUrl: 'https://unistage.vercel.app',
    featured: true,
    category: 'web',
    year: 2024
  },
  {
    id: 'etek',
    title: 'E-Tek',
    description: 'E-commerce especializado em produtos tecnológicos com design moderno, carrinho de compras avançado, sistema de pagamento integrado e experiência de usuário otimizada para dispositivos móveis.',
    shortDescription: 'E-commerce de produtos tecnológicos',
    image: '/images/projetos/etek.png',
    technologies: ['React', 'JavaScript', 'SCSS', 'Stripe', 'Redux', 'Axios'],
    githubUrl: 'https://github.com/VitorMelo1/e-tek',
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
  {
    id: 'task-manager',
    title: 'Task Manager Pro',
    description: 'Sistema de gerenciamento de tarefas com drag & drop, categorização inteligente, lembretes, estatísticas e sincronização em tempo real entre dispositivos.',
    shortDescription: 'Gerenciador de tarefas com drag & drop',
    image: '/images/projetos/task-manager.png',
    technologies: ['React', 'TypeScript', 'SCSS', 'DND Kit', 'LocalStorage', 'Chart.js'],
    githubUrl: 'https://github.com/VitorMelo1/task-manager',
    liveUrl: 'https://task-manager-pro.vercel.app',
    featured: false,
    category: 'web',
    year: 2024
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo com interface elegante, dados em tempo real, localização automática, histórico de cidades e gráficos interativos de temperatura.',
    shortDescription: 'App de previsão do tempo elegante',
    image: '/images/projetos/weather-app.png',
    technologies: ['React', 'JavaScript', 'SCSS', 'OpenWeather API', 'Geolocation', 'Chart.js'],
    githubUrl: 'https://github.com/VitorMelo1/weather-app',
    liveUrl: 'https://weather-app-vitor.vercel.app',
    featured: false,
    category: 'web',
    year: 2023
  },
  {
    id: 'chat-app',
    title: 'Chat App',
    description: 'Aplicação de chat em tempo real com interface moderna, emojis, envio de arquivos, notificações push e design responsivo para desktop e mobile.',
    shortDescription: 'Chat em tempo real com interface moderna',
    image: '/images/projetos/chat-app.png',
    technologies: ['React', 'TypeScript', 'Socket.io', 'SCSS', 'Emoji Picker', 'File Upload'],
    githubUrl: 'https://github.com/VitorMelo1/chat-app',
    liveUrl: 'https://chat-app-vitor.vercel.app',
    featured: false,
    category: 'web',
    year: 2024
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
}; 