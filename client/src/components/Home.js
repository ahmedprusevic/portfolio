import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import reactPic from "../imgs/react.png";
import nodePic from "../imgs/nodejs.png";
import goPic from "../imgs/go.png";
import "../styles/button.css";
import useStyles from "../styles/HomeStyles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>
        &lt; Yo, it's Ahmed Prusevic /&gt;
        <p className={classes.p}>
          I'm a mission driven full stack web developer. Currently based in
          Serbia.
        </p>
      </h1>
      <div className={classes.logos}>
        <Avatar className={classes.logoItem} src={reactPic} />
        <Avatar className={classes.logoItem} src={goPic} />
        <Avatar className={classes.logoItem} src={nodePic} />
      </div>
      <Link to="/projects">
        <button className={`learn-more ${classes.button}`}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">View portfolio</span>
        </button>
      </Link>
    </div>
  );
};

export default Home;
