import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, getProjectById } from "../actions/projects";
import { useHistory, useParams } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import ExtensionIcon from "@material-ui/icons/Extension";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/LoginFormStyles";

const EditProject = ({ classes }) => {
  const [formData, setFromData] = useState({
    title: "",
    description: "",
    img: "",
    liveDemo: "",
    gitHub: "",
  });

  const { title, description, img, liveDemo, gitHub } = formData;

  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects.project);

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(formData, history));
  };

  useEffect(() => {
    dispatch(getProjectById(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    project !== null &&
      setFromData({
        title: project.title,
        description: project.description,
        img: project.img,
        liveDemo: project.liveDemo,
        gitHub: project.gitHub,
      });

    params.id === "add" &&
      setFromData({
        title: "",
        description: "",
        img: "",
        liveDemo: "",
        gitHub: "",
      });
  }, [project, params.id]);

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ExtensionIcon />
        </Avatar>
        <Typography variant="h5">
          {params.id === "add" ? "Add New Project" : "Edit Project"}
        </Typography>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="title">Project Title</InputLabel>
            <Input
              onChange={(e) => handleChange(e)}
              value={title || ""}
              id="title"
              name="title"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField
              onChange={(e) => handleChange(e)}
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={description || ""}
              required
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="img">Link For Project Image</InputLabel>
            <Input
              onChange={(e) => handleChange(e)}
              value={img || ""}
              id="img"
              name="img"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="liveDemo">Live Demo</InputLabel>
            <Input
              onChange={(e) => handleChange(e)}
              value={liveDemo || ""}
              id="liveDemo"
              name="liveDemo"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="gitHub">Github Link</InputLabel>
            <Input
              onChange={(e) => handleChange(e)}
              value={gitHub || ""}
              id="gitHub"
              name="gitHub"
              autoFocus
            />
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {params.id === "add" ? "Add Project" : "Save Changes"}
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(EditProject);
