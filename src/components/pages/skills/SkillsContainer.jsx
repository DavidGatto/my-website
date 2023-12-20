import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";

const skillsContainer = [
  {
    id: "1",
    icon: <FaReact className="text-[50px]" />,
    text: "REACT",
    color: "#1BA1CC",
    subtitle:
      'ReactJS is a JavaScript library that makes it easy to create interactive user interfaces in web applications. It is built on reusable components and takes a “data unidirectional” approach to efficiently manage changes. Its "virtual DOM" implementation optimizes performance by reducing direct updates to the real DOM.',
    title: "What can I do with React?",
    description:
      "With React, I can create highly responsive and interactive user interfaces that can be easily integrated with other JavaScript libraries or frameworks.",
    title2: "What have I built with React?",
    description2:
      "With react I have created multiple web applications, among the most notable is an nfts ecommerce application with register/login",
    title3: "Why do I use React?",
    description3:
      "Overall, React is a powerful and versatile library that helps me build efficient, scalable and maintainable web applications. Its main qualities are that it is easy to use, has a large community, and also integrates easily with other tools.",
  },
  {
    id: "2",
    icon: <IoLogoJavascript className="text-[50px]" />,
    text: "JAVASCRIPT",
    color: "#F7E025",
    subtitle:
      "JavaScript is a programming language used on websites to make them interactive and dynamic. It allows you to add functions such as pop-ups, animations and validations in forms, among many other things. It is responsible for giving life and making web pages respond to what you do.",
    title: "What can I do with Javascript?",
    description:
      "JavaScript is the programming language best used to solve problems. The main use I give it is to create interactive and dynamic websites.",
    title2: "What have I built with Javascript?",
    description2:
      "In addition to the projects built with React, some interesting projects built with this technology have been: a website for a cafeteria and a clothing e-commerce",
    title3: "Why do I use Javascript?",
    description3:
      "The main reason I use JavaScript is its flexibility, which, unlike other programming languages, allows you to develop applications for different platforms.",
  },
  {
    id: "3",
    icon: <FaHtml5 className="text-[50px]" />,
    text: "HTML5",
    color: "#FF5C29",
    subtitle:
      "HTML5 is the language used to build the structure of web pages. Defines how texts, images and links are viewed, in addition to allowing the inclusion of videos and audio. It is the skeleton that holds everything in place and gives shape to the Internet",
    title: "What can I do with HTML5?",
    description:
      "HTML5 allows me to create web structures such as headings, paragraphs, lists, tables, forms and more to give shape and structure to your web content.",
    title2: "What have I built with HTML5?",
    description2:
      "Because HTML5 is the standard markup language in browsers, all the front-end applications I have built have used this technology.",
    title3: "Why do I use HTML5?",
    description3:
      "I use HTML5 because it is the current web standard for creating web pages and web applications. This means that it is widely compatible with most modern web browsers and is the most secure and reliable option for creating web content.",
  },
  {
    id: "4",
    icon: <FaCss3Alt className="text-[50px]" />,
    text: "CSS3",
    color: "#1C76B8",
    subtitle:
      "CSS3 is the painter of a web page. It is responsible for giving style and colors to everything, from the size and font of the letters to the design of the images and the arrangement of the elements. It is like the magic palette that makes the pages look pretty and attractive.",
    title: "What can I do with CSS3?",
    description:
      "CSS is the language I use to style and present my page or web application. With CSS, I control the layout, style, and appearance of elements on my website, allowing me to create attractive layouts, animations, and visual effects.",
    title2: "What have I built with CSS3?",
    description2:
      "Because CSS3 is the standard styling language in browsers, every front-end application I've built has used this technology.",
    title3: "Why do I use CSS3?",
    description3:
      "With CSS3 I have complete control of the presentation on my website, regardless of platform or browser. Plus, it's easy to maintain and update.",
  },
  {
    id: "5",
    icon: <FaSass className="text-[50px]" />,
    text: "Sass",
    color: "#CD6799",
    subtitle:
      "SASS is a styling assistant for CSS. It allows you to write styles in a more organized and reusable way, with functions and variables. It is an assistant that speeds up the design process on web pages.",
    title: "What can I do with Sass?",
    description:
      "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that allows you to write CSS code more efficiently and quickly.",
    title2: "What have I built with Sass?",
    description2:
      "SASS has been an essential tool in styling my web applications since my first project a year ago. At that time, I discovered the benefits of using SASS and have consistently integrated its advanced features into my application builds ever since.",
    title3: "Why do I use Sass?",
    description3:
      "I use SASS in my because, as a preprocessor, it helps me save time and reduce code repetition with variables, functions, and selector nesting. Additionally, a key point is its modularization and organization system, which allows me to keep my code organized and easy to understand, especially in large projects.",
  },
  {
    id: "6",
    icon: <FaBootstrap className="text-[50px]" />,
    text: "Bootstrap",
    color: "#7D57B5",
    subtitle:
      "Bootstrap is an open source front-end development framework that provides predefined tools and styles to make it easy to design and build responsive websites and web applications.",
    title: "What can I do with Bootstrap?",
    description:
      "With Bootstrap, I can create websites quickly and easily using predefined styles and reusable components. Additionally, I ensure that my design is responsive, easily adapting to different devices and screen sizes.",
    title2: "What have I built with Bootstrap?",
    description2:
      "Most of the websites I have developed have been built using Bootstrap.",
    title3: "Why do I use Bootstrap?",
    description3:
      "I use Bootstrap to take advantage of its layout structure and predefined components, allowing me to develop web pages efficiently and with a professional look. Bootstrap's flexibility and responsiveness make it easy to create attractive, device-friendly interfaces, saving time and effort in web development.",
  },
  {
    id: "7",
    icon: <SiTailwindcss className="text-[50px]" />,
    text: "TailwindCSS",
    color: "#06B6D4",
    subtitle:
      "Tailwind is an interface design framework that simplifies creating website layouts and styles. It offers predefined classes that facilitate fast and adaptable design.",
    title: "What can I do with TailwindCSS?",
    description:
      "TailwindCSS is another technique or technology for styling web pages. With it I can create styles for 100% of my application.",
    title2: "What have I built with TailwindCSS?",
    description2:
      "With the help of this tool, I have created several applications, for example, nft ecommerce",
    title3: "Why do I use TailwindCSS?",
    description3:
      "TailwindCSS is a technology that gives you productivity and flexibility when writing CSS code. Additionally, its limitations make it easier to create responsive designs.",
  },
  {
    id: "8",
    icon: <IoLogoFirebase className="text-[50px]" />,
    text: "Firebase",
    color: "#F5820D",
    subtitle:
      "Firebase is a cloud platform that helps developers build web and mobile applications. Provides tools for authentication, real-time data storage, and more.",
    title: "What can I do with Firebase?",
    description:
      "Firebase is a web and mobile platform that allows developers to build backend systems quickly and easily. With this tool, I have the ability to create session systems, manage users, information and files.",
    title2: "What have I built with Firebase?",
    description2:
      "With the help of Firebase, I have created what I consider my best personal project: an nft ecommerce, with register/login and products",
    title3: "Why do I use Firebase?",
    description3:
      "It is a free platform that offers a wide variety of useful services and tools for mobile or web development. It's also easy to use and learn, with a faster learning curve than a backend programming language.",
  },
  {
    id: "9",
    icon: <FaGithub className="text-[50px]" />,
    text: "GitHub",
    color: "#1D202D",
    subtitle:
      "GitHub is a platform for managing and sharing programming code. It allows developers to collaborate on projects, track changes, and maintain a version history.",
    title: "What can I do with GitHub?",
    description:
      "GitHub is an online platform primarily used to host and manage software projects. I generally use the platform to manage my own projects and sometimes use it as documentation for certain projects.",
    title2: "What have I built with GitHub",
    description2:
      "With GitHub I have managed each of the projects that I have uploaded to the web.",
    title3: "Why do I use GitHub?",
    description3:
      "GitHub and its ecosystem is the most used tool on the web to manage code, and this is not in vain. This technology has multiple functions and services that allow me as a developer to change versions of my projects, manage who can change the content of my files, among other things.",
  },
  {
    id: "10",
    icon: <FaGitAlt className="text-[50px]" />,
    text: "Git",
    color: "#F1502F",
    subtitle:
      "Git is a version control system that tracks and manages changes to programming code. It makes it easy to collaborate, track histories, and merge contributions into projects.",
    title: "What can I do with Git?",
    description:
      "Git is another tool to manage projects, their versions and their changes. This tool is essential for the development and subsequent maintenance of any application. That said, I say that I use it every day to create new projects, edit those already created and sometimes delete them.",
    title2: "What have I built with Git",
    description2:
      "With Git I have managed each of the projects that I have uploaded to the web.",
    title3: "Why do I use Git?",
    description3:
      "Git allows collaboration on a project between multiple developers. This is essential in the development of a product. Additionally, their versioning system allows me to track any issues at any time.",
  },
];

export default skillsContainer;
