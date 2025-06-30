import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/VitorMelo1',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/vitor-martins-melo-6272a6326',
      label: 'LinkedIn',
    },
    {
      icon: <Instagram size={20} />,
      href: 'https://www.instagram.com/vitor.m.melo/',
      label: 'Instagram',
    },
    {
      icon: <MessageCircle size={20} />,
      href: 'https://wa.me/5562995054144',
      label: 'WhatsApp',
    },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projetos', href: '/projects' },
    { label: 'Sobre', href: '/about' },
    { label: 'Contato', href: '/contact' },
  ];

  const footerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className={styles.footer}
      variants={footerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <motion.div
              className={styles.brand}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className={styles.brandName}>
                <span className={styles.brandText}>Vitor</span>
                <span className={styles.brandAccent}>Melo</span>
              </h3>
              <p className={styles.brandDescription}>
                Transformando ideias em experiências digitais com energia e inovação.
              </p>
            </motion.div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Links Rápidos</h4>
            <ul className={styles.quickLinks}>
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={styles.quickLink}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Redes Sociais</h4>
            <div className={styles.socialLinks}>
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
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon}
                  <span className={styles.srOnly}>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.divider} />
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Vitor Martins Melo. Todos os direitos reservados.
            </p>
            <p className={styles.madeWith}>
              Feito com <Heart size={16} className={styles.heart} /> e muito café
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}; 