import styled from 'styled-components'
import { Color } from '../../theme/colors'

type Props = {
    disabled?: boolean,
    size?:string,
    variant?:string,
    height?:string ,
}

export const ButtonContainer = styled.button<Props>`
display:flex;
justify-content:center;
align-items:center;
background:${({disabled})=>disabled? Color.gray :({variant})=>variant ? variant: Color.primary};
cursor:${({disabled})=>disabled? 'not-allowed': 'pointer' };
width:${({size})=>size? size: '100%'};
height:${({height})=>height? height: '3rem'};
color:${Color.default};
border:none;
border-radius:.5rem;
transition: background-color .5s linear;
border:${({disabled})=>disabled ? `1px solid ${Color.gray}`:({variant})=>variant ? `1px solid ${variant}`: `1px solid ${Color.primary}`};
&:hover {
background:${({disabled})=>disabled? Color.gray : Color.default};
color: ${({disabled})=>disabled ? Color.default:({variant})=>variant ? variant: Color.primary};
}
`