import "styled-components"

declare module "styled-components"{
    export interface DefaultTheme {
        title: string;
        
        colors: {
            background: string;
            text: string;
            shade: string;
            shadow: string;
        
            primary: string;
            secondary: string;
        }
    }   
}

