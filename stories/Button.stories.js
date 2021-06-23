import React from 'react';
import { Button as ButtonComponent } from '../src';
import { select, text, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Components/Buttons',
    components: ButtonComponent
};

export const Button = () => (    
    <ButtonComponent         
        color={select('color', colorOptions, 'primary')}                 
        disabled={boolean('disabled', false)}
        label={text('label', 'Button')}
        loadingLabel={boolean('loadingLabel', false)}        
        isLoading={boolean('isLoading', false)}
        onClick={() => alert('clique me')}    
    />        
)

const colorOptions = {
    primary: 'primary', 
    secundary: 'secundary', 
    light: 'light', 
    success: 'success', 
    danger: 'danger',
}
