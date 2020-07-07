import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectsStyles';



class Projects extends Component {
  render(){
    const { classes } = this.props
    return (
      <div className={classes.root}>
      heloo
      </div>
    );
  }
  
}

export default withStyles(styles)(Projects);
