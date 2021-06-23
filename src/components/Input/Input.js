import React from 'react'
import { CircularProgress, InputAdornment, TextField } from '@material-ui/core'
import { Label } from '../Label'

const showErrors = (errors) => {
    if (errors.length === 1) {
        return errors
    }

    return(
        <ul>
            {errors.map((error, i) => (                    
                <li key={i}>{error}</li>                    
            ))}
        </ul>
    )    
}

const startAdornment = (icon) => {
    if (icon === undefined) {
        return 
    }

    return (
        <InputAdornment>
            { icon }
        </InputAdornment>
    )
}

export const Input = ({     
    type, 
    id,
    name,
    autoComplete, 
    autoFocus, 
    readOnly, 
    icon,
    endAdornment,    
    labelMaior,
    labelMenor, 
    isLoading,  
    mask,  
    value, 
    errors, 
    clearErrors,
    onChange,
    onBlur
}) => {
    return (
        <div className="form-group">   
            <Label
                bold={true}
                label={labelMaior}
            />
    
            <TextField
                style={(isLoading) ? {opacity: 0.5} : {}}                
                type={type}                    
                id={id}
                name={name}
                
                autoComplete={autoComplete}
                autoFocus={autoFocus}    
                margin="none"
                readOnly={isLoading || readOnly}
                
                label={labelMenor}                    
                error={(errors.length > 0) && true}
                
                InputProps={{
                    value: value,
                    onChange: input => {
                        onChange(input)

                        if (errors.length > 0 && clearErrors !== undefined && clearErrors([]));
                    },                    
                    inputComponent: mask,
                    startAdornment: startAdornment(icon),
                    endAdornment: (
                        <InputAdornment position="start">
                            {(isLoading) 
                                ? <CircularProgress size={32} />
                                : endAdornment || <></>
                            }
                        </InputAdornment>
                    )
                }}

                onBlur={input => {
                    if (onBlur !== undefined) {
                        onBlur(input)
                    }
                }}
            />  

            {(errors) &&
                <strong className="text-danger">
                    { showErrors(errors) }
                </strong>
            }            
        </div>
    )
}

Input.defaultProps = {    
    type: 'text',    
    autoComplete: "",
    isLoading: false,
    readOnly: false   
}

export default Input
