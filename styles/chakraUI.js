import {extendTheme} from "@chakra-ui/react"
const colors ={
    body:{
        background:"171923",
        myblue:"4299E1",
        myred:"E53E3E",
        myred2:"F56565",
        g400:"A0AEC0",

    }

}
const font ={
    fonts: {
        body: "Georgia",
        heading: "Georgia, serif",
        mono: "Menlo, monospace",
      }
}
const theme =extendTheme({colors,font});
export default theme;