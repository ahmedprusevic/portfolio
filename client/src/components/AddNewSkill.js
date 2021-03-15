import React from "react";
import { useDispatch } from "react-redux";
import { createSkill } from "../actions/skills";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/LoginFormStyles";
import BatteryCharging90Icon from "@material-ui/icons/BatteryCharging90";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  img: Yup.string().required("Image is required"),
});

const AddNewSkill = ({ classes }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BatteryCharging90Icon />
        </Avatar>
        <Formik
          initialValues={{
            title: "",
            img: "",
            type: "FrontEnd",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(createSkill(values, history));
          }}
        >
          {(formik) => (
            <>
              <Typography variant="h5">Add New Skill</Typography>
              <form className={classes.form} onSubmit={formik.handleSubmit}>
                <TextField
                  id="title"
                  label="Skill Title"
                  variant="outlined"
                  required
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  autoFocus
                  error={
                    formik.touched.title && formik.errors.title
                      ? formik.errors.title
                      : undefined
                  }
                  helperText={formik.errors.title}
                  fullWidth
                  className={classes.formInput}
                />
                <TextField
                  id="img"
                  label="Link for skill image"
                  variant="outlined"
                  required
                  value={formik.values.img}
                  onChange={formik.handleChange}
                  autoFocus
                  error={
                    formik.touched.img && formik.errors.img
                      ? formik.errors.img
                      : undefined
                  }
                  helperText={formik.errors.img}
                  fullWidth
                  className={classes.formInput}
                />

                <FormControl className={classes.formInput} fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Slect one of the options
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="type"
                    name="type"
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    <MenuItem value={`FrontEnd`}>FrontEnd</MenuItem>
                    <MenuItem value={`BackEnd`}>BackEnd</MenuItem>
                    <MenuItem value={`Other`}>Other</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  color="primary"
                  className={classes.submit}
                >
                  Add Skill
                </Button>
              </form>
            </>
          )}
        </Formik>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(AddNewSkill);
