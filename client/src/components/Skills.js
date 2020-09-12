import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import { getAllSkills, deleteSkill } from '../actions/skills'; 
import withStyles from "@material-ui/core/styles/withStyles";
import styles from '../styles/SkillsStyles';
import { Avatar } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


class Skills extends Component {

  componentDidMount(){
    this.props.getAllSkills();
  }

  render(){
    const { classes, skills: { skills, loading }, auth: { isAuthenticated }, deleteSkill } = this.props;
    return loading ? <Loading /> : <Fragment>
      <div className={classes.root}>
          <div className={classes.top}>
              <div className={classes.header}><h3>FRONT END </h3></div>
            <div className={classes.group}>
              {skills.filter(skill => skill.type === 'FrontEnd').map((skill) => {
                return (
                  <div 
                  key={skill._id}  
                  className={classes.item}>
                    <Avatar 
                    className={classes.logo} 
                    src={skill.img}/> 
                    <p>{skill.title}</p> {isAuthenticated && <HighlightOffIcon onClick={() => deleteSkill(skill._id)} className={classes.remove}/>}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.top}>
              <div className={classes.header}><h3>BACK END</h3></div>
                <div className={classes.group}>
                {skills.filter(skill => skill.type === 'BackEnd').map((skill) => {
                return (
                <div 
                  key={skill._id}  
                  className={classes.item}>
                    <Avatar 
                    className={classes.logo} 
                    src={skill.img}/> 
                    <p>{skill.title}</p> 
                    {isAuthenticated && <HighlightOffIcon onClick={() => deleteSkill(skill._id)} className={classes.remove}/>}
                </div>
                );
              })}
                </div>
          </div>
          <div className={classes.top}>
              <div className={classes.header}><h3>OTHER</h3></div>
              <div className={classes.group}>
              {skills.filter(skill => skill.type === 'Other').map((skill) => {
                return (
                <div 
                  key={skill._id}  
                  className={classes.item}>
                    <Avatar 
                    className={classes.logo} 
                    src={skill.img}/> 
                    <p>{skill.title}</p>
                    {isAuthenticated && <HighlightOffIcon onClick={() => deleteSkill(skill._id)} className={classes.remove}/>}
                </div>
                );
              })}
              </div>
          </div>
      </div>
    </Fragment>
  }
  
}

const mapStateToProps = state => ({
  skills: state.skills,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllSkills, deleteSkill })(withStyles(styles)(Skills));