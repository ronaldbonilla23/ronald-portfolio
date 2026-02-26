import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ronald",
  lastName: "Bonilla",
  name: `Ronald Bonilla`,
  role: "Senior UX/UI Designer & Front-End Developer",
  avatar: "/images/avatar.jpg",
  email: "ronaldbonilla@gmail.com",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Español", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page

  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ronald-bonilla/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Portfolio ${person.name} `,
  description: `Portfolio perssonal mostrando mi trabajo como ${person.role}`,
  headline: <>Fusionando diseño y código</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Soy Ronald, un perfil híbrido de UX/UI y Front-End enfocado en <Text as="span" size="xl" weight="strong">Sistemas Escalables</Text>. Acorto la brecha entre la estética visual y el código, transformando problemas complejos en experiencias fluidas.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Soy Ronald, un perfil híbrido de UX/UI y Front-End enfocado en Sistemas Escalables. Acorto la brecha entre la estética visual y el código, transformando problemas complejos en experiencias fluidas.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "Consultor Independiente",
        timeframe: "2024 - Presente",
        role: "Senior UX/UI Designer & Front-End Developer",
        achievements: [
          <>
            Desarrollo de interfaces escalables y prototipado bajo el enfoque <strong>'Component-Driven Design'</strong> para integraciones sin fricción en entornos React, Next.js y Svelte.
          </>,
          <>
            Liderazgo en estrategias de optimización de conversión (CRO) y arquitecturas dinámicas (WordPress/Headless) para clientes B2B/B2C, como Ancore.es, Makai Hostel y Finca Don Raul.
          </>,
        ],
        images: [],
      },
      {
        company: "Audifarma S.A.",
        timeframe: "2021 - 2024",
        role: "Web Designer & Developer",
        achievements: [
          <>
            Gestión y modernización integral de sitios web corporativos de alto tráfico, erradicando la deuda técnica legacy mediante la integración de un nuevo Front-End modular en <strong>dotCMS</strong>.
          </>,
          <>
            Creación del Sistema de Diseño omnicanal para la App móvil (+1.5M usuarios activos) y diseño de la Intranet corporativa para más de 6,000 empleados.
          </>,
        ],
        images: [],
      },
      {
        company: "Waytic",
        timeframe: "2020 - 2021",
        role: "Senior Front-End Developer",
        achievements: [
          <>
            Lideré el desarrollo en ecosistemas Full Stack, logrando una reducción del <strong>45% en los tiempos de carga</strong> de las plataformas.
          </>,
          <>
            Desarrollo de la capa Front-End para plataformas EdTech (como la certificación de BPM SAS) implementando interfaces reactivas con <strong>Vue.js y Laravel Livewire</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "SENA (Servicio Nacional de Aprendizaje)",
        timeframe: "2015 - 2019",
        role: "Sennova Designer",
        achievements: [
          <>
            Lideré el diseño y desarrollo técnico de herramientas interactivas orientadas a la tecnología educativa (EdTech) a nivel nacional.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studios",
    institutions: [
      {
        name: "Universidad de Caldas",
        description: <>Diseñador Visual.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Figma",
        description: (
          <>Capaz de prototipar en Figma bajo una lógica estricta de componentes, acelerando el paso a código para producción.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
          {
            name: "Photoshop",
            icon: "photoshop",
          },
          {
            name: "Illustrator",
            icon: "illustrator",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "React.js & Vue.js Ecosystem",
        description: (
          <>Desarrollo de interfaces reactivas y flujos interactivos dinámicos. Gestión eficiente del estado en el Front-End para plataformas educativas y corporativas utilizando <strong>Vue.js</strong> y <strong>React.js</strong>.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React.js",
            icon: "react",
          },
          {
            name: "Vue.js",
            icon: "vue",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galleria",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/andina-automotriz.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/blend-apartasuits-web.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/concentrados-del-centro.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/tanque.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/the-gallery-travel-web.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/zalomz-web.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/colcones-nix.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/finca-don-raul.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/fdr.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/minao.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
