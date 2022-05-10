import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import {TryAgain} from './TryAgain'


test("document should render properly ", ()=> {
const onClick = jest.fn();
  const props= {
    startAgain:onClick,
    words:2,
    characters:33,
    
  }

  
  render(<TryAgain  {...props}    />)

  const buttonElement = screen.getByText(/Start Again/)
  expect(buttonElement).toBeInTheDocument()
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(screen.getByText(/33/i)).toBeInTheDocument()
  

 
})
