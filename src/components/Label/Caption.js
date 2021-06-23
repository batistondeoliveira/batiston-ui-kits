import React from 'react'
import PropTypes from 'prop-types'
import Typography from './Typography'

export const Caption = ({ className, color, bold, label }) => (    
    <Typography                             
        className={className}
        variant="caption"
        color={color}
        bold={bold}
        label={label}
    />
)

Caption.propTypes = {          
    className: PropTypes.string,           
    
    color: PropTypes.oneOf(['inherit', 'secondary']),

    bold: PropTypes.bool,

    label: PropTypes.string,     
}

export default Caption
