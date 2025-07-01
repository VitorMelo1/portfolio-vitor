import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, easeOut, useCycle } from 'framer-motion';
import { Menu, X, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import styles from './Header.module.scss';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile quando mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevenir scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'projects', label: 'Projetos', path: '/projects' },
    { id: 'about', label: 'Sobre', path: '/about' },
    { id: 'contact', label: 'Contato', path: '/contact' },
  ];

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

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    scrolled: { 
      y: 0, 
      opacity: 1,
      backgroundColor: 'rgba(13, 13, 13, 0.98)',
      backdropFilter: 'blur(10px)',
    },
  };

  // Animação melhorada do menu mobile
  const mobileMenuVariants = {
    closed: {
      x: '100%',
      opacity: 0.7,
      transition: {
        duration: 0.35,
        ease: easeOut,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        stiffness: 400,
        damping: 32,
        mass: 0.7,
        bounce: 0.18,
        duration: 0.45,
        ease: easeOut,
      },
    },
  };

  // Overlay com fade mais suave
  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.18,
        ease: easeOut,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.28,
        ease: easeOut,
      },
    },
  };

  // Animação dos itens do menu mobile
  const menuItemVariants = {
    closed: { opacity: 0, x: 40 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.08 + i * 0.07,
        duration: 0.32,
        ease: easeOut,
      },
    }),
    exit: { opacity: 0, x: 40, transition: { duration: 0.18, ease: easeOut } },
  };

  return (
    <>
      <motion.header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        variants={headerVariants}
        initial="initial"
        animate={isScrolled ? 'scrolled' : 'animate'}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.container}>
          <motion.div
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className={styles.logoLink}>
              <span className={styles.logoText}>Vitor</span>
              <span className={styles.logoAccent}>Melo</span>
            </Link>
          </motion.div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  className={styles.navItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`${styles.navLink} ${
                      location.pathname === item.path ? styles.active : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.icon}
                <span className={styles.srOnly}>{link.label}</span>
              </motion.a>
            ))}
          </div>

          <motion.button
            className={styles.mobileMenuButton}
            onClick={handleMobileMenuToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Abrir menu"
            animate={isMobileMenuOpen ? { rotate: 90 } : { rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Overlay do Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={handleMobileMenuClose}
          />
        )}
      </AnimatePresence>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileMenuHeader}>
                <h2 className={styles.mobileMenuTitle}>Menu</h2>
                <button
                  className={styles.mobileMenuClose}
                  onClick={handleMobileMenuClose}
                  aria-label="Fechar menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className={styles.mobileNav}>
                <ul className={styles.mobileNavList}>
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      className={styles.mobileNavItem}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                      exit="exit"
                      custom={index}
                    >
                      <Link
                        to={item.path}
                        className={`${styles.mobileNavLink} ${
                          location.pathname === item.path ? styles.active : ''
                        }`}
                        onClick={handleMobileMenuClose}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className={styles.mobileSocialLinks}>
                <h3 style={{ color: '#9CA3AF', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                  Redes Sociais
                </h3>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileSocialLink}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 4) * 0.08 }}
                    onClick={handleMobileMenuClose}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 