import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
function createMyTheme(options?: ThemeOptions) {
    return createMuiTheme({
        color: {
            primary: '#e16259',
            secondary: '#fdf5f2',
            ...options,
        },
        ...options,
    })
}
export default createMyTheme()