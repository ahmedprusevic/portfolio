import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject, getAllProjects } from '../actions/projects';
import { withRouter } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import ExtensionIcon from '@material-ui/icons/Extension';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import styles from '../styles/LoginFormStyles';

class EditProject extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            img: "",
            liveDemo: "",
            gitHub: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.getAllProjects();
        this.setState({
            title: this.props.loading || !projects.title ? '' : projects.title,
            description: this.props.loading || !projects.description ? '' : projects.description,
            img: this.props.loading || !projects.img ? '' : projects.img
        });
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createProject(this.state, this.props.history);
    }

render() {
    const { classes } = this.props;
    const { title, description, img, liveDemo, gitHub } = this.state;
    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <ExtensionIcon />
            </Avatar>
            <Typography variant="h5">Add New Project</Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="title">Project Title</InputLabel>
                    <Input onChange={this.handleChange} value={title} id="title" name="title" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <TextField
                        onChange={this.handleChange}
                        id="description"
                        name= "description"
                        label="Description"
                        multiline
                        rows={4}
                        value= {description}
                        required
                    />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="img">Link For Project Image</InputLabel>
                    <Input onChange={this.handleChange} value={img} id="img" name="img" autoFocus />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="liveDemo">Live Demo</InputLabel>
                    <Input onChange={this.handleChange} value={liveDemo} id="liveDemo" name="liveDemo" autoFocus />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="gitHub">Github Link</InputLabel>
                    <Input onChange={this.handleChange} value={gitHub} id="gitHub" name="gitHub" autoFocus />
                </FormControl>
                <Button 
                variant="contained" 
                type="submit" 
                fullWidth 
                color="primary" 
                className={classes.submit}>
                    Add Project
                </Button>
            </form>
        </Paper>
    </main>
    );
}
};

const mapStateToProps = state = ({
    projects: state.projects
});

export default connect(mapStateToProps, { createProject, getAllProjects })(withRouter(withStyles(styles)(EditProject)));