import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { FaUser } from 'react-icons/fa'

const isValid = (email, setInputError) => {   
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/    
    
    if (!regex.test(email)) {
        var erro = []
        
        erro.push('Email inválido')

        setInputError(erro)
    }
}

export const InputEmail = ({     
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
    const [ inputError, setInputError ] = useState([]);

    return (
        <Input                             
            type="email"
            id={id}
            name={name}

            autoComplete="email"  
            autoFocus={autoFocus} 
            readOnly={readOnly}   
            icon={<FaUser style={{fontSize: '1rem'}} className="mr-2 text-muted" />}
            labelMaior={labelMaior}
            labelMenor={labelMenor}
            isLoading={isLoading}
            value={value}
            errors={(errors.length > 0) ? errors : inputError}
            clearErrors={clearErrors}
            onBlur={input => isValid(input.target.value, setInputError)}            
            onChange={input => {
                onChange(input)

                if (inputError.length > 0) {
                    setInputError([])
                }
            }}
        />
    )
}

InputEmail.propTypes = { 
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

export default InputEmail
