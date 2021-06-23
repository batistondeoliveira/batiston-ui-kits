import React from 'react';
import PropTypes from 'prop-types'
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    success: {
        backgroundColor: green[500]
    },

    error: {
        backgroundColor: red[600]
    }
});

export const Notify = ({
    type,
    message,
    open,
    timeOut,
    onClose
}) => {
    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}
            open={open}
            autoHideDuration={timeOut}
            onClose={onClose}
        >
            <SnackbarContent
                className={classes[type] + ' d-flex justify-content-center'}
                message={
                    <span className="d-flex align-item-center">
                        {message}
                    </span>
                }
            />
        </Snackbar>
    )
}

Notify.defaultProps = {
    message: 'Notifcação',

    timeOut: 3000,
}

Notify.propTypes = {
    type: PropTypes.oneOf(['success', 'error']).isRequired,

    message: PropTypes.string,

    open: PropTypes.bool.isRequired,

    timeOut: PropTypes.number,

    onClose: PropTypes.func.isRequired,
    
}

export default Notify
