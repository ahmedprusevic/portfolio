import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/SkillsStyles';
import { Avatar } from '@material-ui/core';
import reactPic from './imgs/react.png';
import HTMLPic from './imgs/html5.png';
import CSSPic from './imgs/css3.png';
import Bootstrap from './imgs/bootstrap.png';
import MaterialPic from './imgs/materialui.png';
import JavaScriptPic from './imgs/javascript.png';
import mongoPic from './imgs/mongodb.png';
import nodePic from './imgs/nodejs.png';
import expressPic from './imgs/express.png';
import mongoosePic from './imgs/mongoose.jpg';
import github from './imgs/github.png';
import heroku from './imgs/heroku.png'



class Skills extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <div className={classes.top}>
              <div className={classes.header}><h3>FRONT END </h3></div>
            <div className={classes.group}>
                <div className={classes.item}><Avatar className={classes.logo} src={HTMLPic}/> <p>HTML5</p></div>
                <div className={classes.item}><Avatar className={classes.logo} src={CSSPic}/> <p>CSS3</p></div>
                <div className={classes.item}><Avatar className={classes.logo} src={Bootstrap}/> <p>Bootstrap</p></div>
                <div className={classes.item}><Avatar className={classes.logo} src={JavaScriptPic}/> <p>JavaScript</p></div>
                <div className={classes.item}><Avatar className={classes.logo} src={reactPic}/> <p>React JS</p></div>
                <div className={classes.item}><Avatar className={classes.logo} src={MaterialPic}/> <p>Material UI</p></div>
            </div>
          </div>
          <div className={classes.top}>
              <div className={classes.header}><h3>BACK END</h3></div>
                <div className={classes.group}>
                    <div className={classes.item}><Avatar className={classes.logo} src={nodePic}/> <p>Node JS</p></div>
                    <div className={classes.item}><Avatar className={classes.logo} src={mongoPic}/> <p>MongoDB</p></div>
                    <div className={classes.item}><Avatar className={classes.logo} src={expressPic}/> <p>ExpressJS</p></div>
                    <div className={classes.item}><Avatar className={classes.logo} src={mongoosePic}/> <p>Mongoose</p></div>
                </div>
          </div>
          <div className={classes.top}>
              <div className={classes.header}><h3>OTHER</h3></div>
              <div className={classes.group}>
                    <div className={classes.item}><Avatar className={classes.logo} src={heroku}/> <p>Heroku</p></div>
                    <div className={classes.item}><Avatar className={classes.logo} src={github}/> <p>GitHub</p></div>
                </div>
          </div>
      </div>
    );
  }
  
}

export default withStyles(styles)(Skills);