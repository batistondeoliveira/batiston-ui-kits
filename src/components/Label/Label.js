import React from 'react'
import PropTypes from 'prop-types'
import Typography from './Typography'

export const Label = ({ className, variant, color, bold, label }) => (    
    <Typography                             
        className={className}
        variant={variant}
        color={color}
        bold={bold}
        label={label}
    />
)

Label.propTypes = {          
    className: PropTypes.string,       

    /**
     * Indica o tipo de subtitulo
     */    
    variant: PropTypes.oneOf(['subtitle1', 'subtitle2']).isRequired, 
    
    color: PropTypes.oneOf(['inherit', 'secondary']),

    bold: PropTypes.bool,

    label: PropTypes.string,     
}

export default Label
