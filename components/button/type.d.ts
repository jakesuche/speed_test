import { ButtonContainer } from "./styles/button.style";

export type ButtonProps = {
    children: React.ReactNode,
    disabled?: boolean,
    size?:string,
    variant?:string,
    height?:string ,
    onClick:(e:React.MouseEvent<HTMLButtonElement>) => void,
}