import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { 
  Code, 
  Heart, 
  MapPin, 
  Calendar, 
  GraduationCap,
  Rocket,
  Zap,
  Target,
  Award
} from 'lucide-react';
import styles from './About.module.scss';

export const About: React.FC = () => {
  const techStack = [
    { name: 'React', icon: '⚛️', level: 90 },
    { name: 'TypeScript', icon: '📘', level: 85 },
    { name: 'SCSS/Sass', icon: '🎨', level: 88 },
    { name: 'Node.js', icon: '🟢', level: 75 },
    { name: 'Next.js', icon: '⚡', level: 80 },
    { name: 'Framer Motion', icon: '🎭', level: 85 },
    { name: 'Git', icon: '📝', level: 82 },
    { name: 'Figma', icon: '🎯', level: 70 },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Desenvolvedor Front-end',
      company: 'Freelancer',
      description: 'Desenvolvimento de interfaces modernas e responsivas com foco em experiência do usuário.',
      icon: <Rocket size={20} />,
    },
    {
      year: '2023',
      title: 'Estudante de Engenharia',
      company: 'Universidade Federal de Goiás',
      description: 'Formação em Engenharia de Software com foco em desenvolvimento web e mobile.',
      icon: <GraduationCap size={20} />,
    },
    {
      year: '2022',
      title: 'Primeiro Projeto',
      company: 'Portfolio Pessoal',
      description: 'Desenvolvimento do primeiro projeto completo usando React e TypeScript.',
      icon: <Code size={20} />,
    },
  ];

  const stats = [
    { label: 'Projetos Concluídos', value: '15+', icon: <Target size={24} /> },
    { label: 'Tecnologias Dominadas', value: '8+', icon: <Zap size={24} /> },
    { label: 'Ano de Experiência', value: '1+', icon: <Award size={24} /> },
    { label: 'Satisfação do Cliente', value: '100%', icon: <Heart size={24} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.section
          className={styles.hero}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.heroContent} variants={itemVariants}>
            <h1 className={styles.title}>
              Sobre <span className={styles.accent}>Mim</span>
            </h1>
            <p className={styles.subtitle}>
              Desenvolvedor apaixonado por criar experiências digitais incríveis
            </p>
          </motion.div>
        </motion.section>

        {/* Bio Section */}
        <motion.section
          className={styles.bio}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.bioContent} variants={itemVariants}>
            <div className={styles.bioHeader}>
              <h2 className={styles.sectionTitle}>Quem Sou Eu</h2>
              <div className={styles.bioInfo}>
                <div className={styles.infoItem}>
                  <MapPin size={20} />
                  <span>Jaragua, GO</span>
                </div>
                <div className={styles.infoItem}>
                  <Calendar size={20} />
                  <span>20 anos</span>
                </div>
                <div className={styles.infoItem}>
                  <GraduationCap size={20} />
                  <span>Engenharia de Software</span>
                </div>
              </div>
            </div>

            <div className={styles.bioCard}>
              <div className={styles.bioText}>
                <p className={styles.paragraph}>
                  Olá! Sou Vitor Martins Melo, desenvolvedor front-end com foco em transformar ideias em interfaces modernas, fluidas e visualmente marcantes. Com mais de 1 ano e 6 meses de experiência prática, atuo na criação de soluções digitais que unem design elegante, alta performance e uma experiência do usuário intuitiva.
                </p>
                <p className={styles.paragraph}>
                  Minha trajetória começou na <span className={styles.highlight}>UniEVANGÉLICA</span> – Centro Universitário de Anápolis, onde curso Engenharia de Software. Desde então, venho me aprofundando nas tecnologias mais atuais do mercado — como <span className={styles.highlight}>React</span>, <span className={styles.highlight}>TypeScript</span> e <span className={styles.highlight}>SCSS</span> — enquanto desenvolvo projetos reais que impactam pessoas, como sistemas de reserva, monitoramento, portfólios interativos e plataformas de negócios digitais.
                </p>
                <p className={styles.paragraph}>
                  Acredito que a tecnologia deve ser acessível, inteligente e envolvente. Por isso, meu objetivo vai além de apenas escrever código: busco criar experiências digitais que encantam pela usabilidade, pela estética e pelo propósito que entregam.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className={styles.stats}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className={styles.techStack}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.techContent} variants={itemVariants}>
            <h2 className={styles.sectionTitle}>Tech Stack</h2>
            <p className={styles.sectionSubtitle}>
              Tecnologias que domino e utilizo no dia a dia
            </p>
            
            <div className={styles.techGrid}>
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={styles.techCard}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={styles.techIcon}>{tech.icon}</div>
                  <div className={styles.techInfo}>
                    <h3 className={styles.techName}>{tech.name}</h3>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <span className={styles.techLevel}>{tech.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.timelineContent} variants={itemVariants}>
            <h2 className={styles.sectionTitle}>Minha Jornada</h2>
            <p className={styles.sectionSubtitle}>
              Uma linha do tempo da minha evolução profissional
            </p>
            
            <div className={styles.timelineList}>
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={styles.timelineItem}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={styles.timelineIcon}>{item.icon}</div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineYear}>{item.year}</div>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <div className={styles.timelineCompany}>{item.company}</div>
                    <p className={styles.timelineDescription}>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}; 