import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProjects, deleteProject } from '../actions/projects';
import Loading from './Loading';
import withStyles from "@material-ui/core/styles/withStyles";
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
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


class Projects extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      openDialog: false
    }
  };

  componentDidMount(){
    this.props.getAllProjects();
  }

  render(){
    const { classes, projects: { projects, loading }, auth: { isAuthenticated }, deleteProject } = this.props
    return loading ? <Loading /> : <div className={classes.main}>
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
                  <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
           </CardActionArea>
            <CardActions className={classes.action}>
                <div>
                {project.gitHub === '' ? <Button size="small" endIcon={<VisibilityOffIcon/>}>
                  Private 
                  </Button> : 
                  <a className={classes.link} href={project.gitHub} target="_blank" rel="noopener noreferrer">
                  <Button size="small" endIcon={<GitHubIcon/>}>
                  Code 
                  </Button>
                </a>}
                <a className={classes.link} href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <Button size="small" endIcon={<LiveTvIcon/>}>
                  Live Demo
                  </Button>
                </a>
                </div>
                {isAuthenticated && 
                  <IconButton onClick = {() => deleteProject(project._id)}>
                    <DeleteIcon />
                  </IconButton>
                }
            </CardActions>
        </Card>
      </div>
      )})}

    </div>
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllProjects, deleteProject })(withStyles(styles)(Projects));
