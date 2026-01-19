import { motion } from "framer-motion";
import { RESUME_LINK, SCHEDULE_LINK } from "../../../constants";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const darthShell = "https://darthshell.web.app";

const Links = () => {
  const items = ["Homepage", "About", "Skills", "Projects", "Contact", "Terminal", "Resume", "Schedule"];

  const getLink = (item) => {
    switch (item) {
      case "Terminal":
        return darthShell;
      case "Resume":
        return RESUME_LINK;
      case "Schedule":
        return SCHEDULE_LINK;
      default:
        return `#${item}`;
    }
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={getLink(item)}
          key={item}
          variants={itemVariants}
          target={item === "Resume" || item === "Schedule" || item === "Terminal" ? "_blank" : undefined}
          rel={item === "Resume" || item === "Schedule" || item === "Terminal" ? "noreferrer" : undefined}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
