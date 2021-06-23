import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { FaLock, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

export const InputPassword = ({     
    id, 
    name,
    autoFocus, 
    readOnly, 
    labelMaior,
    labelMenor,
    isLoading,
    value, 
    errors, 
    clearErrors,
    onChange
}) => {
    const [show, setShow] = useState(false);    

    return (
        <Input                             
            type={(show) ? "" : "password"}  
            id={id}
            name={name}

            autoComplete="password"  
            autoFocus={autoFocus} 
            readOnly={readOnly}   
            icon={<FaLock style={{fontSize: '1rem'}} className="mr-2 text-muted" />}                                 
            endAdornment={ 
                !show
                    ? <FaRegEye style={{fontSize: '1rem'}} className="mr-2 text-muted cursor-pointer" onClick={ () => setShow(!show) } />
                    : <FaRegEyeSlash style={{fontSize: '1rem'}} className="mr-2 text-muted cursor-pointer" onClick={ () => setShow(!show) } />
            }
            labelMaior={labelMaior}
            labelMenor={labelMenor}
            isLoading={isLoading}
            value={value}
            errors={errors}
            clearErrors={clearErrors}
            onChange={input => onChange(input)}
        />
    )
}

InputPassword.propTypes = {      
    /**
     * Identificador do componente
     */
    id: PropTypes.string,

    /**
     * Nome do componente
     */
    name: PropTypes.string,

    autoFocus: PropTypes.bool,

    readOnly: PropTypes.bool,       

    /**
     * Define o label que ficará fora do input
     */
    labelMaior: PropTypes.string, 

    /**
     * Define o lavel que ficará em cima da borda do input
     */
    labelMenor: PropTypes.string, 
    
    /**
     * Ativa o loading no componente
     */
    isLoading: PropTypes.bool,    

    value: PropTypes.string.isRequired, 

    errors: PropTypes.array, 

    /**
     * Funcao utilizada para limpar os erros do componente ao redigitar um texto
     */
    clearErrors: PropTypes.func,

    onChange: PropTypes.func.isRequired     
}

export default InputPassword
