import React, { useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { 
  Send, 
  MessageCircle, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '../../components/Button/Button';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'vitor.martins.melo@gmail.com',
      href: 'mailto:vitor.martins.melo@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'WhatsApp',
      value: '+55 (62) 99505-4144',
      href: 'https://wa.me/5562995054144',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Localização',
      value: 'Jaraguá, GO - Brasil',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/VitorMelo1',
      color: '#333',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vitor-martins-melo-6272a6326',
      color: '#0077b5',
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      href: 'https://www.instagram.com/vitor.m.melo/',
      color: '#e4405f',
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      href: 'https://wa.me/5562995054144',
      color: '#25d366',
    },
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_69p352o',
        'template_a8592e9',
        e.currentTarget,
        'tV7EtBdLEn4RV_lst'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contact}>
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
              Vamos <span className={styles.accent}>Conversar</span>
            </h1>
            <p className={styles.subtitle}>
              Quer bater um papo, fechar um projeto ou só elogiar o portfólio? Me chama aí!
            </p>
          </motion.div>
        </motion.section>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.section
            className={styles.contactInfo}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className={styles.infoContent} variants={itemVariants}>
              <h2 className={styles.sectionTitle}>Informações de Contato</h2>
              <p className={styles.sectionSubtitle}>
                Escolha a forma que preferir para entrar em contato
              </p>
              
              <div className={styles.infoGrid}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className={styles.infoCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div className={styles.infoContent}>
                      <h3 className={styles.infoLabel}>{info.label}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className={styles.infoValue}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.infoValue}>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Social Links */}
          <motion.section
            className={styles.socialLinks}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className={styles.socialContent} variants={itemVariants}>
              <h2 className={styles.sectionTitle}>Redes Sociais</h2>
              <p className={styles.sectionSubtitle}>
                Me siga nas redes sociais para acompanhar meus projetos
              </p>
              
              <div className={styles.socialGrid}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--social-color': social.color } as React.CSSProperties}
                  >
                    <div className={styles.socialIcon}>{social.icon}</div>
                    <span className={styles.socialLabel}>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            className={styles.contactForm}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className={styles.formContainer} variants={itemVariants}>
              <div className={styles.formContent}>
                <h2 className={styles.sectionTitle}>Envie uma Mensagem</h2>
                <p className={styles.sectionSubtitle}>
                  Preencha o formulário abaixo e eu responderei o mais rápido possível
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input type="hidden" name="title" value="Contato pelo Portfólio" />
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.textarea}
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className={styles.formActions}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className={styles.submitButton}
                    >
                      {isSubmitting ? (
                        <>
                          <div className={styles.spinner} />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        className={styles.statusMessage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CheckCircle size={20} />
                        <span>Mensagem enviada com sucesso! Entrarei em contato em breve.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        className={`${styles.statusMessage} ${styles.error}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <AlertCircle size={20} />
                        <span>Erro ao enviar mensagem. Tente novamente ou use um dos contatos acima.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}; 