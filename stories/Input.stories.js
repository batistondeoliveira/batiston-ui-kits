import React, { useState } from 'react';
import { 
    InputText as InputTextComponent, 
    InputCpf as InputCpfComponent,
    InputEmail as InputEmailComponent,
    InputPassword as InputPasswordComponent    
} from '../src';
import { FaUser } from 'react-icons/fa'
import { text, boolean, array } from '@storybook/addon-knobs';

export default {
    title: 'Components/Inputs',
};

export const InputText = () => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <InputTextComponent                             
            autoComplete="off"  
            autoFocus={boolean('autoFocus', true)}             
            readOnly={boolean('readOnly', false)}             
            labelMaior={text('labelMaior', '')}
            labelMenor={text('labelMenor', '')}
            isLoading={boolean('isLoading', false)}
            value={inputValue}
            errors={array('errors', [])}
            onChange={input => setInputValue(input.target.value)}
        />    
    )
}

export const InputCpf = () => {
    const [ inputValue, setInputValue ] = useState('');    

    return (
        <InputCpfComponent   
            id="cpf"                          
            name="cpf"
            autoComplete="off"  
            autoFocus={boolean('autoFocus', true)}             
            readOnly={boolean('readOnly', false)}             
            labelMaior={text('labelMaior', '')}
            labelMenor={text('labelMenor', '')}
            isLoading={boolean('isLoading', false)}
            value={inputValue}
            errors={text('errors', [])}            
            onChange={input => setInputValue(input.target.value)}
        />    
    )
}

export const InputCpfWithIcon = () => {
    const [ inputValue, setInputValue ] = useState('');    

    return (
        <InputCpfComponent   
            id="cpf"                          
            name="cpf"
            autoComplete="off"  
            autoFocus={boolean('autoFocus', true)}             
            readOnly={boolean('readOnly', false)}  
            icon={<FaUser style={{fontSize: '1rem'}} className="mr-2 text-muted" />}           
            labelMaior={text('labelMaior', '')}
            labelMenor={text('labelMenor', '')}
            isLoading={boolean('isLoading', false)}
            value={inputValue}
            errors={text('errors', [])}            
            onChange={input => setInputValue(input.target.value)}
        />    
    )
}

export const InputEmail = () => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <InputEmailComponent                             
            autoComplete="off"  
            autoFocus={boolean('autoFocus', true)}             
            readOnly={boolean('readOnly', false)}             
            labelMaior={text('labelMaior', '')}
            labelMenor={text('labelMenor', '')}
            isLoading={boolean('isLoading', false)}
            value={inputValue}
            errors={array('errors', [])}
            onChange={input => setInputValue(input.target.value)}
        />    
    )
}

export const InputPassword = () => {
    const [ inputValue, setInputValue ] = useState('');

    return (
        <InputPasswordComponent                             
            autoComplete="off"  
            autoFocus={boolean('autoFocus', true)}             
            readOnly={boolean('readOnly', false)}             
            labelMaior={text('labelMaior', '')}
            labelMenor={text('labelMenor', '')}
            isLoading={boolean('isLoading', false)}
            value={inputValue}
            errors={array('errors', [])}
            onChange={input => setInputValue(input.target.value)}
        />    
    )
}
