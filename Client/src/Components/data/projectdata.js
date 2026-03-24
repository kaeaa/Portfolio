import sibolImg from "../../assets/SIBOL.png";
import learnquake from "../../assets/LearnQuake.png";
import MyxCulture from "../../assets/MyxCulture.png";

const projects = [
  {
    slug: "sibol",
    img: sibolImg,
    title: "SIBOL",
    desc: "A smart monitoring ",
    para1:
      "SIBOL is a smart monitoring platform designed to provide real-time insights and analytics for businesses. Built with React, and Tailwind CSS, featuring a modern interface.",
    para2:
      "Communities struggle with disconnected, and often overwhelming applications that make it difficult to access and understand their data. Without a unified platform, users have to navigate multiple tools, dashboards, and reports to get a clear picture of their performance, which can lead to confusion and missed opportunities.",
    para3:
      "SIBOL eliminates these barriers by providing a unified view of analytics data, enabling informed decision-making and operational efficiency. The platform removes the need for manual data aggregation and reporting, making it easier to stay on top of their performance metrics.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Typescript",
      "Express Js",
      "Render",
      "GitHub",
    ],
    link: "https://sibolsprout.netlify.app/",
  },
  {
    slug: "learnquake",
    img: learnquake,
    title: "LearnQuake",
    desc: "A modern learning platform dedicated to making education more accessible, engaging, and effective through interactive and technology-driven experiences.",
    technologies: [
      "Typescript",
      "React",
      "Tailwind CSS",
      "Express Js",
      "Render",
      "Github",
    ],
    para1:
      "Learnquake is an Information Hub that have Earthquake Simulation tool that can be used by both proffessionals and students",
    para2:
      "Seismology Tool can give earthquake preview that will be helpful in navigating the frequency range, time series filtering, and spectral analysis.",
    para3:
      "Learnquake also offers Earthquake Footages and Facts that the users can use to search and learn about eartquakes.",
    link: "https://learnquake.netlify.app/",
  },
  {
    slug: "myxculture",
    img: MyxCulture,
    title: "MyXCulture",
    desc: "An E-commerce platform that offers currated styles for everyone, providing a seamless shopping experience.",
    para1:"A sleek portfolio platform for MyXCulture, built to present its clothing line.",
    para2:"MyXCulture delivers culturally inspired clothing that lets you express your identity through comfortable, high-quality, and meaningful fashion pieces.",
    technologies: [
      "React",
      "Typescript",
      "Tailwind Css",
    ],
    link:"https://github.com/kaeaa/MyxCulture-Website",
  },
];
export default projects;
