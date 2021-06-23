import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import Input from './Input'

const TextMaskCpf = (props) => {
    const { inputRef, ...other } = props;
    const mask = [/[0-9]/, /\d/, /\d/, '.', /\d/, /\d/,  /\d/, '.', /\d/, /\d/,  /\d/, '-', /\d/, /\d/];
    
    return (
        <MaskedInput
            {...other}            
            ref={ref => {
                inputRef(ref ? ref.inputElement : null)
            }}
            mask={mask}
            guide={false}
        />
    )
}

const invalidCpf = (cpf) => {
    if (cpf === "00000000000") {
        return true
    }

    if (cpf === "11111111111") {
        return true
    }

    if (cpf === "22222222222") {
        return true
    }

    if (cpf === "33333333333") {
        return true
    }

    if (cpf === "44444444444") {
        return true
    }

    if (cpf === "55555555555") {
        return true
    }

    if (cpf === "66666666666") {
        return true
    }

    if (cpf === "77777777777") {
        return true
    }

    if (cpf === "88888888888") {
        return true
    }

    if (cpf === "99999999999") {
        return true
    }

    return false
}

const error = (setInputError) => {
    var erro = []
        
    erro.push('Cpf inválido')

    setInputError(erro)

    return ;
}

const isValid = (cpf, setInputError) => {  
    if (!cpf) {
        return ;
    }

    var soma = 0
    var resto      
    
    cpf = cpf.replace(/[^\d]+/g, '')

    if (invalidCpf(cpf)) {
        return error(setInputError)
    }    

    //verifica primeiro dv
    for (var i = 1; i <= 9; i++) {        
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i)        
    }

    resto = (soma * 10) % 11

    if ((resto === 10) || (resto === 11)) {
        resto = 0
    }    

    if (resto !== parseInt(cpf.substring(9,10))) {
        return error(setInputError)
    }

    //verifica segundo dv
    soma = 0
    for (var i = 1; i <= 10; i++) {        
        soma += parseInt(cpf.substring(i-1, i)) * (12 - i)        
    }

    resto = (soma * 10) % 11

    if ((resto === 10) || (resto === 11)) {
        resto = 0
    }    

    if (resto !== parseInt(cpf.substring(10,11))) {
        return error(setInputError)       
    }   
}

export const InputCpf = ({     
    id,
    name,
    autoFocus, 
    readOnly, 
    labelMaior,
    labelMenor,
    isLoading,    
    icon,    
    value, 
    errors, 
    clearErrors,
    onChange
}) => {
    const [ inputError, setInputError ] = useState([]);

    return (
        <Input                             
            type="tel"
            id={id}
            name={name}

            autoComplete="off"  
            autoFocus={autoFocus} 
            readOnly={readOnly}   
            icon={icon}
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
            mask={TextMaskCpf}                      
        />
    )
}

InputCpf.propTypes = { 
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

    icon: PropTypes.element,

    value: PropTypes.string.isRequired, 

    errors: PropTypes.array, 

    /**
     * Funcao utilizada para limpar os erros do componente ao redigitar um texto
     */
    clearErrors: PropTypes.func,

    onChange: PropTypes.func.isRequired     
}

export default InputCpf
