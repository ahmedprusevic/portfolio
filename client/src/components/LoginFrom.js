import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/LoginFormStyles";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Required"),
});

const LoginForm = ({ classes }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return auth.isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <>
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(login(values));
            }}
          >
            {(formik) => (
              <div>
                <Typography variant="h5" className={classes.header}>
                  Sign In
                </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    autoFocus
                    error={
                      formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : undefined
                    }
                    helperText={formik.errors.email}
                    fullWidth
                    className={classes.formInput}
                  />

                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    autoFocus
                    error={
                      formik.touched.password && formik.errors.password
                        ? formik.errors.password
                        : undefined
                    }
                    helperText={formik.errors.password}
                    fullWidth
                    className={classes.formInput}
                    type="password"
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            )}
          </Formik>
        </Paper>
      </main>
    </>
  );
};

export default withStyles(styles)(LoginForm);
