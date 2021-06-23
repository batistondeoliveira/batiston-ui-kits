import { addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from './stylesheet'

import './reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

addDecorator(withInfo);
addDecorator((story) => (    
    <ThemeProvider theme={theme}>
        {story()}
    </ThemeProvider>        
))

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },        
    },  
    layout: 'centered',
}
