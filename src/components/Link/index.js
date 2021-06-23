import { Link as LinkRouterDom } from 'react-router-dom';
import PropTypes from 'prop-types'

export const Link = ({ classNameContainer, className, dropDown, to, label }) => (
    <div className={classNameContainer}>
        <LinkRouterDom
            className={ "text-decoration-none" + className }
            data-toogle={(dropDown ? 'dropdown' : '')}
            to={to}            
        >
            {label}
        </LinkRouterDom>
    </div>
)

Link.propTypes = {
    classNameContainer: PropTypes.string,

    className: PropTypes.string,

    /**
     * Indica que o link é drop-down
     */
    dropDown: PropTypes.bool,
    
    /**
     * Aqui você coloca o link de destino, exemplo: /home
     */
    to: PropTypes.string,    

    /**
     * Aqui você coloca o label indicando para onde o usuário vai ao clicar, exemplo: Ir para Home
     */
    label: PropTypes.string,
}

export default Link
