import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import glassesimoji from "../../img/glassesimoji.png";
import heartemoji from "../../img/heartemoji.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume .pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={" Front-End Developer"}
            detail={"Html, Css,TailWind Css ,JavaScript , React js , Bootstap "}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{  top: "19rem", left: "25rem"}}
          whileInView={{ left: "12rem" }}
          transition={transition}
        > <Card
        emoji={glassesimoji}
        heading={" Back-End Developer"}
        detail={" Nodejs, Express,Mango db ,Rest APIs "}
      />
    </motion.div>
    {/* 4rd */}
    <motion.div
      initial={{ right: "-11rem", Top: "12rem" }}
      whileInView={{ right: "-4rem" }}
      transition={transition}
    ><Card
    emoji={heartemoji}
    heading={" Others"}
    detail={" Git , GitHub , C# , SQL Server ,Problem Solving , Sharing Work "}
  />
</motion.div>
{/* 3rd */}

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
