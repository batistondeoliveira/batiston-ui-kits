import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from '@material-ui/core'
import Label from '../Label/Label'
import { MdError, MdCheckCircle } from 'react-icons/md'

const AlertType = {
    SUCCESS: {
        enumName: "SUCCESS",
        component: <MdCheckCircle style={{fontSize: '2.5rem'}} className="mr-3 text-success" />
    },
    ERROR: {
        enumName: "ERROR",
        component: <MdError style={{fontSize: '2.5rem'}} className="mr-3 text-danger" />
    },
    get(value) {
        var array = Object.values(AlertType);
        var objectFound = {};        

        array.forEach(element => {            
            if(element.enumName === value.toUpperCase()) {
                objectFound = element;      
                return ;          
            }            
        });   
        
        return objectFound;
    }
}

export const Alert = ({   
    type, 
    open, 
    message, 
    timeOut, 
    onClose 
}) => {   
    if(open) {
        setTimeout(() => onClose(), timeOut);
    }

    return (
        <Modal
            open={open}
            onClose={() => onClose()}
            className="d-flex flex-column align-items-center justify-content-center h-100"
        >
            <div className="bg-white rounded-lg d-flex align-items-center p-4">
                { AlertType.get(type).component }                

                <Label 
                    className="font-weight-bold"
                    label={message}
                />                            
            </div>
        </Modal>
    )
}

Alert.defaultProps = {
    type: 'success',

    timeOut: 3000
}

Alert.propTypes = { 
    type: PropTypes.oneOf(['success', 'error']).isRequired,

    open: PropTypes.bool.isRequired,

    message: PropTypes.string.isRequired,

    timeOut: PropTypes.number,

    onClose: PropTypes.func.isRequired
}

export default Alert
