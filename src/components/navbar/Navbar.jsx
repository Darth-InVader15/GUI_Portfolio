import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { RESUME_LINK, SCHEDULE_LINK } from "../../constants";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Darth Web
        </motion.span>
        <div>
          <a href="https://darthshell.web.app/">Remove animations </a>
          <a> | </a>
          <a href={RESUME_LINK}> View Resume</a>
          <a> | </a>
          <a href={SCHEDULE_LINK} target="_blank" rel="noreferrer"> Schedule Meet</a>
        </div>
        <div className="social">
          <a href="https://github.com/Darth-InVader15">
            <img src="/github1.png" alt="" />
          </a>
          <a href="https://www.instagram.com/__i.r.i.d.e.s.c.e.n.t___/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/darthinvader5/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/Darth-InVader15/">
            <img src="/lc.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
