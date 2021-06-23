import React from 'react'
import PropTypes from 'prop-types'
import { Modal, CircularProgress } from '@material-ui/core';
import { Label } from '../Label'

export const Loading = ({
    open,
    message,
    onClose
}) =>
    <Modal
        open={open}
        onClose={onClose}
        className="d-flex justify-content-center align-items-center h-100"
    >
        <div className="bg-white d-flex align-items-center rounded-lg p-3">
            <CircularProgress size={20} className="mr-3" />
            
            <Label
                variant="subtitle1"                                        
                label={message}
            />                            
        </div>
    </Modal>

Loading.defaultProps = {
    message: 'Aguarde...'
}

Loading.propTypes = {
    open: PropTypes.bool.isRequired,

    message: PropTypes.string,

    onClose: PropTypes.func.isRequired    
}

export default Loading    
