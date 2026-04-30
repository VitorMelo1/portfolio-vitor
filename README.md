# 🚀 Portfólio Vitor Martins Melo

Um portfólio pessoal moderno e futurista desenvolvido com React, TypeScript e SCSS, inspirado no design do Discord e GitHub.

## ✨ Características

- 🎨 **Design Futurista**: Tema dark com cores roxo e preto
- 📱 **Totalmente Responsivo**: Mobile-first design
- ⚡ **Animações Avançadas**: Framer Motion para transições suaves
- 🎯 **Performance Otimizada**: Lazy loading e otimizações
- 🔧 **TypeScript**: Tipagem forte para melhor desenvolvimento
- 🎨 **SCSS Modular**: Estilos organizados e reutilizáveis
- 📦 **Componentes Reutilizáveis**: Arquitetura escalável
- 🌐 **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **SCSS** - Pré-processador CSS
- **Framer Motion** - Animações
- **Swiper** - Carrossel de projetos
- **Lucide React** - Ícones
- **ESLint + Prettier** - Linting e formatação

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/VitorMelo1/portfolio-vitor.git
   cd portfolio-vitor
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:5173
   ```

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint
```

## 📁 Estrutura do Projeto

```
portfolio-vitor/
├── public/                 # Arquivos estáticos
│   ├── images/            # Imagens
│   └── favicon.ico        # Favicon
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Button/        # Botão customizado
│   │   ├── Header/        # Header com navegação
│   │   ├── Footer/        # Footer
│   │   ├── ProjectCard/   # Card de projeto
│   │   └── SocialIcons/   # Ícones sociais
│   ├── pages/             # Páginas principais
│   │   ├── Home/          # Página inicial
│   │   ├── Projects/      # Seção de projetos
│   │   ├── About/         # Sobre mim
│   │   └── Contact/       # Contato
│   ├── styles/            # Estilos SCSS
│   │   ├── _variables.scss    # Variáveis
│   │   ├── _mixins.scss       # Mixins
│   │   ├── _reset.scss        # Reset CSS
│   │   └── globals.scss       # Estilos globais
│   ├── data/              # Dados mockados
│   │   ├── projects.ts    # Projetos
│   │   └── testimonials.ts # Depoimentos
│   ├── assets/            # Assets
│   │   ├── icons/         # Ícones SVG
│   │   └── images/        # Imagens
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Entry point
├── .eslintrc.json         # Configuração ESLint
├── .prettierrc            # Configuração Prettier
├── tsconfig.json          # Configuração TypeScript
└── package.json           # Dependências
```

## 🎨 Personalização

### Cores
Edite `src/styles/_variables.scss` para alterar as cores:

```scss
$primary-purple: #7C3AED;
$dark-bg: #0D0D0D;
$text-primary: #FFFFFF;
```

### Conteúdo
- **Projetos**: Edite `src/data/projects.ts`
- **Depoimentos**: Edite `src/data/testimonials.ts`
- **Informações pessoais**: Edite os componentes das páginas

### Animações
As animações são configuradas com Framer Motion nos componentes individuais.

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

## 🔧 Configurações

### ESLint
Configurado para React + TypeScript com regras personalizadas.

### Prettier
Formatação automática de código com configurações otimizadas.

### TypeScript
Configuração estrita com path mapping para imports limpos.

## 📈 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Bundle Size**: Otimizado com Vite
- **Images**: Lazy loading automático
- **Fonts**: Carregamento otimizado

## 🤝 Fluxo Profissional (Git)

### Branches
- `main`: branch estável e protegida
- `feat/*`: novas funcionalidades
- `fix/*`: correções de bugs
- `chore/*`: manutenção e melhoria interna

### Commits
Use Conventional Commits para manter histórico limpo:
- `feat:`
- `fix:`
- `refactor:`
- `docs:`
- `chore:`

### Pull Requests
1. Crie uma branch nova a partir da `main`
2. Faça commits pequenos e descritivos
3. Abra PR usando o template do repositório
4. Aguarde CI verde (`lint` + `build`)
5. Faça merge apenas via PR

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **GitHub**: [@VitorMelo1](https://github.com/VitorMelo1)
- **LinkedIn**: [Vitor Martins Melo](https://www.linkedin.com/in/vitor-martins-melo-6272a6326)
- **Instagram**: [@vitor.m.melo](https://www.instagram.com/vitor.m.melo/)
- **WhatsApp**: [+55 62 99505-4144](https://wa.me/5562995054144)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
