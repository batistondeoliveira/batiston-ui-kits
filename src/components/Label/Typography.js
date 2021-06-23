import React from 'react'
import PropTypes from 'prop-types'
import { Typography as TypographyMUI} from '@material-ui/core'

export const Typography = ({ className, variant, color, bold, component, label }) => (    
    <TypographyMUI 
        className={(bold ? 'font-weight-bold' : '') + ' ' + className}
        variant={variant}    
        color={color}     
        component={component}
    >
        {label}
    </TypographyMUI>
)

Typography.defaultProps = {
    color: 'inherit',
    
    bold: false
}

Typography.propTypes = {
    className: PropTypes.string,

    variant: PropTypes.string,    

    color: PropTypes.string,

    bold: PropTypes.bool,

    component: PropTypes.string,
    
    label: PropTypes.string.isRequired
}

export default Typography
