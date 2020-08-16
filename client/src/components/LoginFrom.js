import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { login } from '../actions/auth';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from '../styles/LoginFormStyles';
import { Redirect } from 'react-router-dom';



class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
    }

    render() {
        const { classes, isAuthenticated } = this.props;
        const { email, password } = this.state;
        //Redirect if logged in
        if(isAuthenticated){
            return <Redirect to="/" />
        }
        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h5">Sign In</Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input onChange={this.handleChange} value={email} id="email" name="email" autoFocus />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input onChange={this.handleChange} value={password} id="password" name="password" autoFocus type="password" />
                        </FormControl>
                        <Button 
                        variant="contained" 
                        type="submit" 
                        fullWidth 
                        color="primary" 
                        className={classes.submit}>
                            Sign In
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, login })(withStyles(styles)(LoginForm));