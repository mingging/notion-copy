import { Theme } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
        color: {
            primary: string
            secondary: string
        }
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {
        color?: {
            primary?: string
            secondary?: string
        }
    }
}
