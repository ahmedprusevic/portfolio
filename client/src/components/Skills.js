import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllSkills, deleteSkill } from "../actions/skills";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "../styles/SkillsStyles";
import { Avatar } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Skills = ({ classes }) => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllSkills());
  }, [dispatch]);

  return skills.loading ? (
    <Loading />
  ) : (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.top}>
          <div className={classes.header}>
            <h3>FRONT END </h3>
          </div>
          <div className={classes.group}>
            {skills.skills
              .filter((skill) => skill.type === "FrontEnd")
              .map((skill) => {
                return (
                  <div key={skill._id} className={classes.item}>
                    <Avatar className={classes.logo} src={skill.img} />
                    <p>{skill.title}</p>{" "}
                    {auth.isAuthenticated && (
                      <HighlightOffIcon
                        onClick={() => dispatch(deleteSkill(skill._id))}
                        className={classes.remove}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={classes.top}>
          <div className={classes.header}>
            <h3>BACK END</h3>
          </div>
          <div className={classes.group}>
            {skills.skills
              .filter((skill) => skill.type === "BackEnd")
              .map((skill) => {
                return (
                  <div key={skill._id} className={classes.item}>
                    <Avatar className={classes.logo} src={skill.img} />
                    <p>{skill.title}</p>
                    {auth.isAuthenticated && (
                      <HighlightOffIcon
                        onClick={() => dispatch(deleteSkill(skill._id))}
                        className={classes.remove}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
        <div className={classes.top}>
          <div className={classes.header}>
            <h3>OTHER</h3>
          </div>
          <div className={classes.group}>
            {skills.skills
              .filter((skill) => skill.type === "Other")
              .map((skill) => {
                return (
                  <div key={skill._id} className={classes.item}>
                    <Avatar className={classes.logo} src={skill.img} />
                    <p>{skill.title}</p>
                    {auth.isAuthenticated && (
                      <HighlightOffIcon
                        onClick={() => dispatch(deleteSkill(skill._id))}
                        className={classes.remove}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withStyles(styles)(Skills);
