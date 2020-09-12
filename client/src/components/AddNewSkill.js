import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSkill } from '../actions/skills';
import { withRouter } from 'react-router-dom';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import styles from '../styles/LoginFormStyles';
import BatteryCharging90Icon from '@material-ui/icons/BatteryCharging90';

class AddNewSkill extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            img: "",
            type: "FrontEnd"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createSkill(this.state, this.props.history);
    }



render() {
    const values = [
        {
            value: "FrontEnd",
            label: "FrontEnd"
        },
        {
            value: "BackEnd",
            label: "BackEnd"
        },
        {
            value: "Other",
            label: "Other"
        }
    ];
    const { classes } = this.props;
    const { title, img, type } = this.state;
    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <BatteryCharging90Icon />
            </Avatar>
            <Typography variant="h5">Add New Skill</Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="title">Skill Name</InputLabel>
                    <Input onChange={this.handleChange} value={title} id="title" name="title" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="img">Link For Skill Image</InputLabel>
                    <Input onChange={this.handleChange} value={img} id="img" name="img" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                <TextField
                    id="type"
                    name="type"
                    select
                    value={type}
                    onChange={this.handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    helperText="Please select one of the options"
                    >
                    {values.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                </TextField>
                </FormControl>
                <Button 
                variant="contained" 
                type="submit" 
                fullWidth 
                color="primary" 
                className={classes.submit}>
                    Add Skill
                </Button>
            </form>
        </Paper>
    </main>
    );
}
};

export default connect(null, { createSkill })(withRouter(withStyles(styles)(AddNewSkill)));