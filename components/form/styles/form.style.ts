import styled from "styled-components";
import { Color } from "../../theme/colors";


type Props = {
  maxWidth: string;
  bgColor: string;
  align?: string;
  margin?: string;
};


export const FormContainer = styled.form``;
export const Input = styled.input<Props>`
display: block;
width: 100%;
height: 48px;
padding: 0.375rem 1.75rem;
font-size: 1rem;
font-weight: 400;
font-family: 'Galano Grotesque';
line-height: 1.5;
color: #4B5563;
background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
background-clip: padding-box;
border-radius: 8px;
border: 1px solid ${Color.gray};
outline: none;
max-width: ${({ maxWidth }) => maxWidth};
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
cursor: pointer;
:hover{
    box-shadow: 0px 0px 6px ${Color.gray};
  
}
::placeholder {
    color: ${Color.gray};
    
  }
}


`;
export const Group = styled.div`


`;
export const Label = styled.label`
  display: inline-block;
  color: ${Color.gray2};
  font-weight: 400;
  font-size: 10px;
  text-align: start;
`;
export const Text = styled.p<Props>`
  text-align: ${({align})=>align};
  margin: ${({margin})=>margin};
  
`;


export const Title = styled.h1`
    color:${Color.default}
    

`