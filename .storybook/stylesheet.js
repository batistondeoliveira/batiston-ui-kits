import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from "@material-ui/core/colors"

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500]
        }
    },
    typography: {
        fontFamily: "'Roboto', 'Open Sans', sans-serif",
        button: {
            textTransform: 'none'
        }
    },
    shape: {
        borderRadius: 3
    },
    props: {        
        MuiTextField: {
            variant: 'outlined',
            fullWidth: true
        },
        MuiSelect: {
            variant: 'outlined',
            fullWidth: true
        }
    }
})
