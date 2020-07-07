import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ProjectsStyles';
import Card from '@material-ui/core/Card';
import Project1 from "./imgs/project1.gif";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';




class Projects extends Component {


  render(){
    const { classes } = this.props
    return (
      <div className={classes.card}>
       <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={Project1}
              title="Contemplative Reptile"
            />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
           </CardActionArea>
            <CardActions className={classes.action}>
                <div>
                  <Button size="small" endIcon={<GitHubIcon/>}>
                    Code
                  </Button>
                  <Button size="small" endIcon={<LiveTvIcon/>}>
                    Live Demo
                  </Button>
                </div>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
            </CardActions>
        </Card>
      </div>
    );
  }
  
}

export default withStyles(styles)(Projects);
