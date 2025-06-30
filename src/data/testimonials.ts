export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Silva',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: '/images/testimonials/ana-silva.jpg',
    content: 'O Vitor entregou um projeto excepcional! Sua atenção aos detalhes e capacidade de criar interfaces intuitivas superaram todas as expectativas. O PulseTap ficou incrível!',
    rating: 5,
    project: 'PulseTap'
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    role: 'CTO',
    company: 'UniEvangélica',
    avatar: '/images/testimonials/carlos-mendes.jpg',
    content: 'Trabalhar com o Vitor foi uma experiência fantástica. Ele transformou nossa visão do UniStage em uma plataforma robusta e moderna. Altamente recomendado!',
    rating: 5,
    project: 'UniStage'
  },
  {
    id: '3',
    name: 'Mariana Costa',
    role: 'UX Designer',
    company: 'DesignStudio',
    avatar: '/images/testimonials/mariana-costa.jpg',
    content: 'Vitor tem uma sensibilidade incrível para design e usabilidade. O E-Tek ficou com uma experiência de usuário perfeita. Definitivamente vamos trabalhar juntos novamente!',
    rating: 5,
    project: 'E-Tek'
  },
  {
    id: '4',
    name: 'Roberto Santos',
    role: 'Startup Founder',
    company: 'LaceUp Inc',
    avatar: '/images/testimonials/roberto-santos.jpg',
    content: 'O Vitor desenvolveu nosso app mobile com maestria. Sua expertise em React Native e atenção aos detalhes resultaram em um produto de alta qualidade.',
    rating: 5,
    project: 'LaceUp'
  },
  {
    id: '5',
    name: 'Fernanda Lima',
    role: 'Frontend Lead',
    company: 'DigitalAgency',
    avatar: '/images/testimonials/fernanda-lima.jpg',
    content: 'Vitor é um desenvolvedor excepcional! Sua capacidade de resolver problemas complexos e entregar código limpo e escalável é impressionante.',
    rating: 5
  },
  {
    id: '6',
    name: 'Lucas Oliveira',
    role: 'Tech Lead',
    company: 'InnovationLab',
    avatar: '/images/testimonials/lucas-oliveira.jpg',
    content: 'Tive o prazer de trabalhar com o Vitor em vários projetos. Sua dedicação, conhecimento técnico e criatividade fazem dele um profissional único.',
    rating: 5
  }
];

export const getFeaturedTestimonials = () => {
  return testimonials.slice(0, 4);
};

export const getTestimonialById = (id: string) => {
  return testimonials.find(testimonial => testimonial.id === id);
}; 