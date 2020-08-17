import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import styles from '../styles/AlertStyles';
import Typography from "@material-ui/core/Typography";



const Alert = ({ alerts, classes }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={classes.root}>
        <Typography variant="h5" className={classes.text}>{alert.msg}</Typography>
    </div>
));

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(withStyles(styles)(Alert));