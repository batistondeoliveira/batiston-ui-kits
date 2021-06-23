import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

export const InputText = ({   
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
}) => 
    <Input                             
        type="text"
        id={id}
        name={name}

        autoComplete="off"  
        autoFocus={autoFocus} 
        readOnly={readOnly}                    
        labelMaior={labelMaior}
        labelMenor={labelMenor}
        isLoading={isLoading}
        value={value}
        errors={errors}
        clearErrors={clearErrors}
        onChange={input => onChange(input)}
    />

InputText.propTypes = { 
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

export default InputText
