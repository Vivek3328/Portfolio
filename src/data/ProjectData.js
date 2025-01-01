import iNotebook from "../assets/iNotebook.png";
import sorting from "../assets/weatherApp.png";
import weather from "../assets/Weather.png";
import quickbite from "../assets/QuickBite.png";

const ProjectData = [
  {
    id: 1,
    title: "QuickBite",
    imgPath: quickbite,
    description:
      "QuickBite is a full-stack web application I built to streamline food ordering for users and restaurant management for owners. Users can browse menus, place orders, and track delivery statuses, while restaurant owners can manage their menus and view orders. The app features a responsive UI, an intuitive checkout process, and a real-time order status system. I implemented secure JWT-based authentication, integrated Cloudinary for image uploads, and used MongoDB to store user and order data. The frontend is built with React.js, styled with Tailwind CSS, and managed with Redux, while the backend is powered by Node.js and Express.js.",
    technologies: [
      "Reactjs",
      "JavaScript",
      "Tailwand CSS",
      "Nodejs",
      "Express",
      "MongoDB",
    ],
    link: "https://github.com/Vivek3328/QuickBite",
    demo: "https://quick-bite-wine.vercel.app/",
  },
  {
    id: 2,
    title: "iNotebook",
    imgPath: iNotebook,
    description:
      " iNotebook, a cloud-based note-taking application that allows users to create, securely store, and access personal and professional notes from any device. The platform offers features like note editing, deletion, and tagging to enhance personalization and organization. Built using MongoDB, React, Express.js, and Node.js, it ensures a responsive and reliable user experience. To prioritize privacy, secure login credentials were implemented, safeguarding sensitive information and providing peace of mind for users managing their notes.",
    technologies: ["React", "Express", "MongoDB", "Bootstrap", "Nodejs"],
    link: "https://github.com/Vivek3328/iNotebook",
    demo: "https://i-notebook-mu.vercel.app/",
  },
  {
    id: 3,
    title: "Sorting visualizer",
    imgPath: sorting,
    description:
      "The Sorting Visualizer is a web page designed to visualize various sorting algorithms in action. Built with HTML, CSS, and JavaScript, it provides an interactive platform where users can observe how different algorithms, such as Bubble Sort, Merge Sort, Quick Sort, and others, sort data step-by-step. The visualizer helps users understand the mechanics behind each algorithm by animating the sorting process in real-time, making it a valuable educational tool for learning and comparing sorting techniques.",
    technologies: ["HTML", "CSS", "JavaScript", "Algorithms", "Data Structure"],
    link: "https://github.com/Vivek3328/Sorting-Visualizer",
    demo: "https://vivek3328.github.io/Sorting-Visualizer/",
  },
  {
    id: 4,
    title: "Weather App",
    imgPath: weather,
    description:
      "The Weather App is a web-based application built using Node.js, HTML, CSS, and JavaScript. It allows users to check real-time weather conditions by simply entering the name of a city. The app fetches data from a weather API to display key details such as temperature, humidity, wind speed, and general weather conditions. With a clean, responsive design, users can easily access weather information for any city, making it a convenient tool for quick weather updates.",
    technologies: ["HTML", "CSS", "JavaScript", "Nodejs", "Express"],
    link: "https://github.com/Vivek3328/Weather-Website",
    demo: "https://weather-website-o8vj.onrender.com/",
  },
];

export default ProjectData;
