import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import emailjs from 'emailjs-com';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import styles from '../styles/LoginFormStyles';

class ContactMe extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            content: ""
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
        const  { email, content } = this.state
        let emailParams = {
            to_name: "Ahmed",
            from_name: email,
            message: content
        }
        
        emailjs.send('service_pfa6eya', 'template_cj9e6od', emailParams, 'user_Pi9XaSMlEkSxIQwEcs4xJ').then(() => {
            this.props.setAlert('Email sent');
            this.setState({
                email:'',
                content:''
            });
        }, (error) => {
            console.log(error.text);
        });

        
    }

render() {
    const { classes } = this.props;
    const { email, content } = this.state;
    return(
        <main className={classes.main}>
        <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
                <EmailIcon />
            </Avatar>
            <Typography variant="h5">Contact Me</Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="title">Enter Your Email Here</InputLabel>
                    <Input onChange={this.handleChange} value={email} id="email" name="email" type="email" autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <TextField
                        onChange={this.handleChange}
                        id="message"
                        name= "content"
                        label="Message"
                        multiline
                        rows={5}
                        value= {content}
                        required
                    />
                </FormControl>
                <Button 
                variant="contained" 
                type="submit" 
                fullWidth 
                color="primary" 
                className={classes.submit}>
                    Send Email
                </Button>
            </form>
        </Paper>
    </main>
    );
}
};

export default connect(null, { setAlert })(withStyles(styles)(ContactMe));