import React from 'react'
import PropTypes from 'prop-types'
import Typography from './Typography'

export const H1 = ({ className, color, bold, label }) => (    
    <Typography                             
        className={className}
        variant="h6"         
        component="h1"
        color={color}  
        bold={bold}      
        label={label}
    />
)

H1.propTypes = {          
    className: PropTypes.string,       

    color: PropTypes.oneOf(['inherit', 'secondary']),

    bold: PropTypes.bool,

    label: PropTypes.string,     
}

export default H1
