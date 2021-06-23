import React, { useState } from 'react';
import { Loading as LoadingComponent, Button  } from '../src';
import { text } from '@storybook/addon-knobs';

export default {
    title: 'Components/Loadings',
    components: LoadingComponent
};

export const Loading = () => {
    const [open, setOpen] = useState(false);

    return (
        <> 
            <LoadingComponent             
                open={open}
                message={text('message', 'Aguarde...')}
                onClose={() => setOpen(false)}            
            />  

            <Button 
                color='primary'
                label="Open"
                onClick={() => {
                    setOpen(true)
                    setTimeout(() => setOpen(false), 3000)
                }}
            />            
        </>     
    )
}