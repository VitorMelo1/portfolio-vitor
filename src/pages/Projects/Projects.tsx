import React, { useState } from 'react';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { ExternalLink, Github, Filter, Code, Eye } from 'lucide-react';
import { projects } from '../../data/projects';
import { Button } from '../../components/Button/Button';
import styles from './Projects.module.scss';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(selectedFilter)
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className={styles.projects}>
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
              Meus <span className={styles.accent}>Projetos</span>
            </h1>
            <p className={styles.subtitle}>
              Uma coleção dos meus trabalhos mais recentes e projetos que me orgulho
            </p>
          </motion.div>
        </motion.section>

        {/* Filters Section */}
        <motion.section
          className={styles.filters}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.filtersContent} variants={itemVariants}>
            <div className={styles.filtersHeader}>
              <Filter size={20} />
              <h2 className={styles.filtersTitle}>Filtrar por Tecnologia</h2>
            </div>
            
            <div className={styles.filterButtons}>
              <Button
                variant={selectedFilter === 'all' ? 'primary' : 'outline'}
                size="md"
                onClick={() => handleFilterChange('all')}
                className={styles.filterButton}
              >
                Todos
              </Button>
              
              {allTechnologies.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedFilter === tech ? 'primary' : 'outline'}
                  size="md"
                  onClick={() => handleFilterChange(tech)}
                  className={styles.filterButton}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            key={selectedFilter}
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>
                    <Code size={48} />
                  </div>
                  
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        className={styles.projectOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className={styles.overlayContent}>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                            className={styles.overlayButton}
                          >
                            <Github size={16} />
                            Ver Código
                          </Button>
                          
                          {project.liveUrl && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(project.liveUrl, '_blank')}
                              className={styles.overlayButton}
                            >
                              <Eye size={16} />
                              Ver Demo
                            </Button>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectLinks}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <Github size={18} />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projectTechnologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.technology}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <div className={styles.projectStats}>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>Dificuldade:</span>
                      <span className={styles.statValue}>{project.difficulty}</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statLabel}>Status:</span>
                      <span className={`${styles.statValue} ${styles[project.status]}`}>
                        {project.status}
                      </span>
                    </div>
                  </div> */}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        {/* Empty State */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              className={styles.emptyState}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Code size={64} />
              <h3>Nenhum projeto encontrado</h3>
              <p>Tente selecionar uma tecnologia diferente ou volte mais tarde!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}; 