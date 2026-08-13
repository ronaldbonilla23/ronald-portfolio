import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ronald",
  lastName: "Bonilla",
  name: `Ronald Bonilla`,
  role: "Design Engineer · Frontend & UX/UI Developer",
  avatar: "/images/avatar.jpg",
  email: "ronaldbonilla@gmail.com",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
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
  description: `Personal portfolio showcasing my work as a ${person.role}`,
  headline: <>Bridging Design and Code</>,
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
      I'm Ronald, a hybrid UX/UI and Front-End profile focused on <Text as="span" size="xl" weight="strong">Scalable Systems</Text>. I close the gap between visual design and code, turning complex problems into fluid experiences — increasingly powered by AI-assisted workflows.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a ${person.role} based in Colombia`,
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
        I'm Ronald, a hybrid UX/UI and Front-End profile focused on Scalable Systems. I close the gap between visual design and code, turning complex problems into fluid experiences — increasingly powered by AI-assisted workflows.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Consultant",
        timeframe: "2024 - Present",
        role: "Design Engineer · Frontend & UX/UI Developer",
        achievements: [
          <>
            Built scalable interfaces and prototypes under a <strong>'Component-Driven Design'</strong> approach for frictionless integration across React, Next.js and Svelte.
          </>,
          <>
            Led conversion rate optimization (CRO) strategy and dynamic architectures (WordPress/Headless) for B2B/B2C clients such as Ancore.es, Makai Hostel and Finca Don Raul.
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
            Managed and fully modernized high-traffic corporate websites, eliminating legacy technical debt by integrating a new modular Front-End on <strong>dotCMS</strong>.
          </>,
          <>
            Built the omnichannel Design System for the mobile app (+1.5M active users) and designed the corporate Intranet for over 6,000 employees.
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
            Led Full Stack development, achieving a <strong>45% reduction in load times</strong> across platforms.
          </>,
          <>
            Built the Front-End layer for EdTech platforms (including BPM SAS certification) with reactive interfaces using <strong>Vue.js and Laravel Livewire</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "SENA (National Learning Service)",
        timeframe: "2015 - 2019",
        role: "Sennova Designer",
        achievements: [
          <>
            Led the design and technical development of interactive tools for educational technology (EdTech) at a national level.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universidad de Caldas",
        description: <>Visual Designer.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Prototyping in Figma under a strict component-driven logic, accelerating the handoff into production code.</>
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
          <>Building reactive interfaces and dynamic interactive flows. Efficient Front-End state management for educational and corporate platforms using <strong>Vue.js</strong> and <strong>React.js</strong>.</>
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
  label: "Gallery",
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
