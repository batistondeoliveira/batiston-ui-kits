import { Button as ButtonMaterialMUI, CircularProgress} from '@material-ui/core'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { green, blue, red, cyan } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({    
    wrapper: {      
        position: 'relative',
    },
    buttonPrimary: {
        backgroundColor: blue[500],
        color: '#fff',        
        '&:hover': {
            backgroundColor: blue[700]
        }
    },
    buttonSecundary: {
        backgroundColor: cyan[500],
        color: '#fff',
        '&:hover': {
            backgroundColor: cyan[700]
        }
    },   
    buttonLight: {
        
    },     
    buttonSuccess: {
        backgroundColor: green[500],
        color: '#fff',        
        '&:hover': {
            backgroundColor: green[700],
        },
    },  
    buttonDanger: {
        backgroundColor: red[500],
        color: '#fff',
        '&:hover': {
            backgroundColor: red[700],
        },
    },   
    buttonProgress: {
        color: "#fff",
        position: 'absolute',
        top: '50%',
        right: '5%',
        marginTop: -12,
        marginLeft: -12,
    },
}))

export const Button = ({     
    color,     
    disabled, 
    label, 
    loadingLabel,     
    isLoading, 
    onClick 
}) => {   
    const classes = useStyles()

    const buttonClassName = clsx({
        [classes.buttonPrimary]: color === 'primary',        
        [classes.buttonSecundary]: color === 'secundary',            
        [classes.buttonLight]: color === 'light',  
        [classes.buttonSuccess]: color === 'success',    
        [classes.buttonDanger]: color === 'danger'
    }); 

    return (
        <div className="form-group">   
            <div className={classes.wrapper}>
                <ButtonMaterialMUI
                    className={buttonClassName}
                    color="primary"
                    variant={color === 'light' ? "outlined" : "contained"}                                     
                    fullWidth
                    size="large"                      
                    disabled={disabled}
                    onClick={onClick}
                >
                    {!isLoading ? label : loadingLabel || 'Aguarde'}
                </ButtonMaterialMUI>

                { isLoading && <CircularProgress size={24} className={classes.buttonProgress} /> }
            </div>            
        </div>
    )
}

Button.defaultProps = {
    color: 'primary',       
    disabled: false,     
    isLoading: false,
    loadingLabel: 'Aguarde',
    onClick: undefined  
}

Button.propTypes = {
    /**
     * Define a cor do botao
     */
    color: PropTypes.oneOf(['primary', 'secundary', 'light', 'success', 'danger']),         

    disabled: PropTypes.bool,

    label: PropTypes.string.isRequired,     

    /**
     * Exibe um label informativo para o usuario que a aplicacao está em loading
     */
    loadingLabel: PropTypes.string,

    /**
     * Indica que a aplicação está em loading
     */    
    isLoading: PropTypes.bool,    
}

export default Button
