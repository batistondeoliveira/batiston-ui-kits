import React, { useState } from 'react'
import { 
    Alert as AlertComponent, 
    Confirm as ConfirmComponent,
    Notify as NotifyComponent,
    Button 
} from '../src'
import { text, select, number } from '@storybook/addon-knobs'

export default {
    title: 'Components/Messages',    
};

export const Alert = () => {   
    const [ open, setOpen ] = useState(false);

    return (
        <> 
            <AlertComponent                  
                type={select('type', typeOptions, 'success')}
                message={text('message', 'Alerta')}         
                open={open}
                onClose={() => setOpen(false)}                
            />       

            <Button 
                color='primary'
                label="Open"
                onClick={() => setOpen(true)}
            />            
        </>    
    )
}

const typeOptions = {
    success: 'success',
    error: 'error'
}

export const Confirm = () => {   
    const [ open, setOpen ] = useState(false);

    return (
        <> 
            <ConfirmComponent
                open={open}
                title={text('title', 'Tem certeza que deseja excluir?')}                                
                onClose={() => setOpen(false)}
                onConfirm={() => alert('Você clicou no SIM')}
            />       

            <Button 
                color='primary'
                label="Open"
                onClick={() => setOpen(true)}
            />            
        </>    
    )
}

export const Notify = () => {   
    const [ open, setOpen ] = useState(false);

    return (
        <> 
            <NotifyComponent
                type={select('type', notifyOptions, 'success')}
                message={text('message', 'Isto é uma notificação')}
                open={open}
                timeOut={number('timeOut', 3000)}                
                onClose={() => setOpen(false)}                
            />       

            <Button 
                color='primary'
                label="Open"
                onClick={() => setOpen(true)}
            />            
        </>    
    )
}

const notifyOptions = {
    success: 'success',
    error: 'error'
}
