import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  threejs,
  expressjs,flask,opencv,python,tensorflow,
  movie,iris,hotstar,andrew,
  salary,
  object,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
    {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Web Design",
    icon: backend,
  },
  {
    title: "Computer Vision",
    icon: backend,
  },
  {
    title: "DSA",
    icon: creator,
  },
  {
    title: "Programming languages",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Open CV",
    icon: opencv,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
];

const projects = [
  {
    name: "Movie Recommender",
    description:
      "Harnessing cutting-edge machine learning algorithms seamlessly fused with an intuitive web interface, this platform curates customized film recommendations, empowering users to uncover new cinematic gems that resonate with their preferences and beloved selections.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Hy-per-ion/movie-recommendation-system",
  },
  {
    name: "Hotstar Clone",
    description:
      "Exemplifying technical finesse, the Hot Start clone is meticulously engineered using HTML, CSS, and JavaScript. This front-end marvel mirrors the sophistication of its source, ensuring an immersive user journey that seamlessly emulates the original's allure with a touch of contemporary flair.",
    tags: [
      {
        name: "HTML 5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: hotstar,
    source_code_link: "https://github.com/Hy-per-ion/hotstar-clone",
  },
  {
    name: "Salary analyzer",
    description:
      "AI-powered Salary Analyzer and predictor, harnessing the prowess of machine learning to assess experience, test scores, and interview evaluations. Seamlessly navigate career growth with bespoke salary insights, arming you with the tools for strategic negotiations and professional advancement.",
    tags: [
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "linear regression",
        color: "pink-text-gradient",
      },
    ],
    image: salary,
    source_code_link: "https://github.com/Hy-per-ion/salary-analyser",
  },
  {
    name: "Andrew Voice Assistant",
    description:
      "Andrew, your intuitive voice assistant, seamlessly blends natural language processing and AI to effortlessly comprehend and fulfill your spoken commands providing informative responses, revolutionizing your daily interaction experience.",
    tags: [
      {
        name: "artificial intelligence",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: andrew,
    source_code_link: "https://github.com/Hy-per-ion/andrew-voice-assistant",
  },
  {
    name: "Iris Flower Detector",
    description:
      "Experience the fusion of machine learning sophistication and elegant front-end design with the Iris Flower Prediction Website. Effortlessly predict flower species by inputting attributes, seamlessly bridging accuracy and user-friendly interaction.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "front end",
        color: "pink-text-gradient",
      },
    ],
    image: iris,
    source_code_link: "https://github.com/Hy-per-ion/iris",
  },
  {
    name: "Object Detector",
    description:
      "Used the state-of-the-art Yolo v8 model that swiftly identifies objects in real time video feed. With the power of this cutting-edge object detection technology we can achieve fortified security to advanced autonomous systems.",
    tags: [
      {
        name: "open cv",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv8",
        color: "pink-text-gradient",
      },
    ],
    image: object,
    source_code_link: "https://github.com/Hy-per-ion/object-detection",
  },
];

export { services, technologies, projects };
