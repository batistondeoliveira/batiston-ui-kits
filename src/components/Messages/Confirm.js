import React from 'react'
import PropTypes from 'prop-types'
import { Dialog, DialogActions, DialogTitle } from '@material-ui/core'
import Button from '../Button'

export const Confirm = ({ 
    open, 
    title, 
    onClose, 
    onConfirm 
}) =>         
    <Dialog
        open={open}
        onClose={() => onClose()}   
    >
        <DialogTitle disableTypography>
            <h6>
                {title}
            </h6>
        </DialogTitle>

        <DialogActions className="justify-content-center mb-2">
            <Button 
                color='light'
                label="Não"
                onClick={() => onClose()}
            />                

            <Button 
                color='primary'
                label="Sim"
                onClick={() => {
                    onClose();
                    onConfirm();    
                }}
            />            
        </DialogActions>
    </Dialog>    

Confirm.defaultProps = {
    open: false, 

    title: 'Tem certeza que deseja excluir?'
}

Confirm.propTypes = {         
    open: PropTypes.bool.isRequired,

    title: PropTypes.string,    

    onClose: PropTypes.func.isRequired,

    onConfirm: PropTypes.func.isRequired,
}

export default Confirm
