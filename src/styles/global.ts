import {globalCss} from '@ionext-ui/react' 


export const  globalStyles = globalCss({
    '*':{
        boxSizing:'border-box',
        margin:'0',
        padding:'0'
    },
    body:{
        backgroundColor:'$background',
        color:'$text',
        '-webkit-font-smoothing':'antialiased',
    }
})