import React from "react";
import { useDispatch } from "react-redux";
import { createProject, updateProject } from "../actions/projects";
import { useHistory, useParams, useLocation } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ExtensionIcon from "@material-ui/icons/Extension";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/LoginFormStyles";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  img: Yup.string().required("Image is required"),
});

const EditProject = ({ classes }) => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const project = useLocation().state;

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ExtensionIcon />
        </Avatar>
        <Formik
          enableReinitialize
          initialValues={{
            title: project ? project.title : "",
            description: project ? project.description : "",
            img: project ? project.img : "",
            liveDemo: project ? project.liveDemo : "",
            gitHub: project ? project.gitHub : "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (params.id === "add") {
              dispatch(createProject(values, history));
            } else {
              dispatch(updateProject(values, params.id, history));
            }
          }}
        >
          {(formik) => (
            <>
              <Typography variant="h5">
                {params.id === "add" ? "Add New Project" : "Edit Project"}
              </Typography>
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <TextField
                  id="title"
                  label="Title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  autoFocus
                  error={formik.errors.title || false}
                  helperText={formik.errors.title}
                  fullWidth
                  className={classes.formInput}
                />
                <TextField
                  id="description"
                  label="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  multiline
                  rows={4}
                  error={formik.errors.description || false}
                  helperText={formik.errors.description}
                  fullWidth
                  className={classes.formInput}
                />
                <TextField
                  id="img"
                  label="Img"
                  value={formik.values.img}
                  onChange={formik.handleChange}
                  error={formik.errors.img || false}
                  helperText={formik.errors.img}
                  fullWidth
                  className={classes.formInput}
                />
                <TextField
                  id="liveDemo"
                  label="Live Demo"
                  value={formik.values.liveDemo}
                  onChange={formik.handleChange}
                  error={formik.errors.liveDemo}
                  helperText={formik.errors.liveDemo}
                  fullWidth
                  className={classes.formInput}
                />
                <TextField
                  id="gitHub"
                  label="Github"
                  value={formik.values.gitHub}
                  onChange={formik.handleChange}
                  error={formik.touched.gitHub && formik.errors.gitHub}
                  helperText={formik.errors.gitHub}
                  fullWidth
                  className={classes.formInput}
                />

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
            </>
          )}
        </Formik>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(EditProject);
