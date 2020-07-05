import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import reactPic from './imgs/react.png';
import mongoPic from './imgs/mongodb.png';
import nodePic from './imgs/nodejs.png';
import expressPic from './imgs/express.png'
import styles from './styles/HomeStyles';



class Home extends Component {
  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <h1 className={classes.header}>
          Yo, it's me Ahmed
          <p>I'm a mission driven full stack web developer.Currently based in Serbia.</p>
        </h1>
          <div className={classes.logos}>
            <Avatar className={classes.logoItem} src={mongoPic} />
            <Avatar className={classes.logoItem} src={expressPic} />
            <Avatar className={classes.logoItem} src={reactPic} />
            <Avatar className={classes.logoItem} src={nodePic} />
          </div>
      </div>
    );
  }
  
}

export default withStyles(styles)(Home);
