import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Full Stack Projects",
    img: "/mern.png",
    desc: "",
    url: "",
  },{
    id: 101,
    title: "Sam: Local AI Companion",
    img: "/bot.jpg",
    desc: "Developed a private Local LLM Orchestrator using FastAPI for backend, implementing Server-Sent Events (SSE) to parallelize text generation and Kokoro-82M audio synthesis, reducing interaction latency by 40%. Designed a Dynamic Context Engine that injects role-specific system prompts into Llama 3 to switch personas (e.g., Therapist, Friend), utilizing SQLite for offline, persistent memory management.",
    url: "",
  },{
    id: 102,
    title: "AI DJ for YouTube Music",
    img: "/youtube.png",
    desc: "Engineered a context-aware Chrome Extension integrating the Gemini API to analyze musical metadata and generate dynamic, mood-aligned voiceovers (Intro/Outro) in real-time. Refactored the TypeScript architecture to centralize audio state management, reducing code redundancy by 40% and ensuring seamless synchronization between TTS playback and media events.",
    url: "",
  },{
    id: 103,
    title: "VisualizeX: Data Visualisation Dashboard",
    img: "/mern.png",
    desc: "Engineered a high-throughput dashboard using Node.js and React, utilizing WebSockets to stream live KPI metrics from a MongoDB cluster directly to Chart.js visualizations. Implemented Role-Based Access Control to securely expose sensitive business intelligence, ensuring data integrity across large-scale datasets. Integrated Leaflet.js to perform server-side geospatial clustering, rendering user demographic heatmaps for business insights.",
    url: "",
  },{
    id: 2,
    title: "E-Commerce Website",
    img: "/Ecom.png",
    desc: "A modern and seamless Shopping platform with modern and materialistic UI. It supports both User and Seller signups and logins. It uses JWT for authentication, ExpressJS for Server side development, ReactJS and MUI for frontend and MongoDB as database.",
    url: "https://github.com/ShouryaTyagi042/EcommerceProject",
  },{
    id: 3,
    title: "AttenDed - Attendance Management WebApp",
    img: "/Attended.png",
    desc: "AttenDed is a webapp I designed for tracking my college's attendance. It uses Firebase for authentication, ExpressJS for Server side development, ReactJS for frontend and MongoDB as database.",
    url: "https://github.com/Darth-InVader15/AttenDED",
  },
  {
    id: 4,
    title: "EMR's Official Website",
    img: "/emr.png",
    desc: "The official website of the NITKKR's Embedded and Robotics Club.",
    url: "https://github.com/yujit2003/WebD-2.0-1",
  },
  // {
  //   id: 5,
  //   title: "ProfReview - a website to rate your professors",
  //   img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   desc: "Worked on the backend of the website. Users can rate their professor on basis of difficulty of coursework, homeworks, leniency in assessment,etc. It uses Firebase for authentication, ExpressJS for Server side development, and MongoDB as database.",
  // },
];
const Android = [
  {
    id: 6,
    title: "Android Projects",
    img: "/android.png",
    desc: "",
  },
  {
    id: 7,
    title: "Ambisonic Music App (8D Audio)",
    img: "/x.png",
    desc: "This app takes any normal audio and pans its sound in 8 directions to give a 3D effect. It uses the Ambisonic Audio format to achieve this. The app uses the ExoPlayer library to play the audio.",
    url: "https://github.com/Darth-InVader15/8D-Audio",
  },
  {
    id: 8,
    title: "Quotes App",
    img: "/quote2.png",
    desc: "A simple app that displays a random quote every five seconds. The app uses the Retrofit library to fetch the quotes from an API.",
    url: "https://github.com/Darth-InVader15/Quotes.App",
  },
];
const Embedded = [
  {
    id: 9,
    title: "Embedded Systems Projects",
    img: "/uno.jpg",
    desc: "",
  },
  {
    id: 10,
    title: "2D Maze Solver Bot",
    img: "/bot.jpg",
    desc: "This bot uses the 3 PIR sensors on its front and uses DFS algorithm to traverse through any 2D maze. For this repo, an Arduino UNO was used as the microcontroller.",
    url: "https://github.com/Darth-InVader15/Labyrinth-Solver-Bot",
  },
  {
    id: 11,
    title: "WiFi controlled Bot",
    img: "/wifibot.jpg",
    desc: "This bot uses ESP8266 to connect to the internet and can be controlled using a web interface. This bot can further be furnished with a camera to make it a surveillance bot.",
    url: "https://github.com/Darth-InVader15/WiFi-Controlled-Bot",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleClick = () => {
    window.open(item.url, '_blank');
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            {item.url && <button onClick={handleClick}>See on Github</button>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      {Android.map((item) => (
        <Single item={item} key={item.id} />
      ))}
      {Embedded.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
