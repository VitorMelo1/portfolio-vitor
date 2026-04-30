import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/VitorMelo1',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/vitor-martins-melo-6272a6326',
      label: 'LinkedIn',
    },
    {
      icon: <Instagram size={24} />,
      href: 'https://www.instagram.com/vitor.m.melo/',
      label: 'Instagram',
    },
    {
      icon: <MessageCircle size={24} />,
      href: 'https://wa.me/5562995054144',
      label: 'WhatsApp',
    },
  ];

  const stats = [
    { label: 'Projetos', value: '15+', suffix: '' },
    { label: 'Ano de', value: '1+', suffix: 'Experiência' },
    { label: 'Tecnologias', value: '8+', suffix: 'Dominadas' },
    { label: 'Satisfação', value: '100%', suffix: 'do Cliente' },
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
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const typingText = [
    'Desenvolvedor Front-end',
    'Criador de Experiências',
    'Apaixonado por Tecnologia',
    'Inovador Digital',
  ];

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.section
          className={styles.hero}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.heroContent} variants={itemVariants}>
            <motion.div className={styles.greeting} variants={itemVariants}>
              <span className={styles.wave}>👋</span>
              <span className={styles.greetingText}>Olá, eu sou</span>
            </motion.div>

            <motion.h1 className={styles.title} variants={itemVariants}>
              <span className={styles.name}>Vitor Martins Melo</span>
       
            </motion.h1>

            <motion.div className={styles.typingContainer} variants={itemVariants}>
              <span className={styles.typingText}>
                {typingText[0]}
                <span className={styles.cursor}>|</span>
              </span>
            </motion.div>

            <motion.p className={styles.description} variants={itemVariants}>
              Transformando ideias em experiências digitais incríveis com energia, 
              inovação e muito código. Especialista em React, TypeScript e design 
              de interfaces modernas.
            </motion.p>

            <motion.div className={styles.ctaButtons} variants={itemVariants}>
              <Link to="/projects">
                <Button variant="primary" size="lg" className={styles.button} icon={<ArrowRight size={20} />} iconPosition="right">
                  Ver Projetos
                </Button>
              </Link>
              
              <a href="https://wa.me/5562995054144" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" icon={<MessageCircle size={20} />} iconPosition="right">
                  Fale no WhatsApp
                </Button>
              </a>
            </motion.div>

            <motion.div className={styles.socialLinks} variants={itemVariants}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  {link.icon}
                  <span className={styles.srOnly}>{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
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
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className={styles.statCard}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>
                  {stat.label} {stat.suffix}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          className={styles.quickActions}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.actionsContent} variants={itemVariants}>
            <h2 className={styles.actionsTitle}>O que você gostaria de ver?</h2>
            <div className={styles.actionsGrid}>
              <Link to="/projects" className={styles.actionCard}>
                <motion.div
                  className={styles.actionContent}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h3>Meus Projetos</h3>
                  <p>Veja uma coleção dos meus trabalhos mais recentes</p>
                  <ArrowRight size={20} />
                </motion.div>
              </Link>

              <Link to="/about" className={styles.actionCard}>
                <motion.div
                  className={styles.actionContent}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h3>Sobre Mim</h3>
                  <p>Conheça minha jornada e tecnologias que domino</p>
                  <ArrowRight size={20} />
                </motion.div>
              </Link>

              <Link to="/contact" className={styles.actionCard}>
                <motion.div
                  className={styles.actionContent}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h3>Entre em Contato</h3>
                  <p>Vamos conversar sobre seu próximo projeto</p>
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}; 