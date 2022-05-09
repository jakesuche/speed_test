import React from "react";
import { ButtonContainer } from "./styles/button.style";
import { ButtonProps } from "./type";

const Button: React.FC<ButtonProps> = ({ size, disabled,variant, height,onClick,children }) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant} size={size} height={height} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
