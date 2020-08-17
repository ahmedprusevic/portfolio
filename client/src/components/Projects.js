import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllProjects } from '../actions/projects';
import Loading from './Loading';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/ProjectsStyles';
import Card from '@material-ui/core/Card';
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
import EditIcon from '@material-ui/icons/Edit';




class Projects extends Component {
  
  componentDidMount(){
    this.props.getAllProjects();
  }

  render(){
    const { classes, projects: { projects, loading }, auth: { isAuthenticated } } = this.props
    return loading && projects === null ? <Loading /> : <Fragment>
      {projects.map((project) => {
        return(
        <div className={classes.card} key={project._id}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image= {project.img}
              title="Contemplative Reptile"
            />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
           </CardActionArea>
            <CardActions className={classes.action}>
                <div>
                <a className={classes.link} href={project.gitHub} target="_blank" rel="noopener noreferrer">
                  <Button size="small" endIcon={<GitHubIcon/>}>
                  Code 
                  </Button>
                </a>
                <a className={classes.link} href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <Button size="small" endIcon={<LiveTvIcon/>}>
                  Live Demo
                  </Button>
                </a>
                </div>
                {isAuthenticated && 
                  <IconButton>
                    <EditIcon />
                  </IconButton> }
                  
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
            </CardActions>
        </Card>
      </div>
      )})}
      
    </Fragment>
  }
  
}

const mapStateToProps = state => ({
  projects: state.projects,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllProjects })(withStyles(styles)(Projects));
