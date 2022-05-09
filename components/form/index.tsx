import React from 'react'
import { FormContainer, Input, Group, Label, Text, Title } from './styles/form.style'
import { FormProps } from './type'

const Form = ({children, ...restProps}:FormProps) => {
  return (
    <FormContainer {...restProps}>
        {children}
    </FormContainer>
  )
}

export default Form

Form.Group = function FormGroup({children,...restProps}:FormProps){
    return <Group {...restProps}>{children}</Group>
}

Form.Input = function FormInput({...restProps}:FormProps){
    return <Input {...restProps} />
}

Form.Label = function FormLabel({children,...restProps}:FormProps){
    return <Label {...restProps}>{children}</Label>
}

Form.Text = function FormText({children,...restProps}:FormProps){
    return <Text {...restProps}>{children}</Text>
}

Form.Title = function FormText({children,...restProps}:FormProps){
    return <Title {...restProps}>{children}</Title>
}



