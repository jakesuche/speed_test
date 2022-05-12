import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { TryAgain } from "../TryAgain/TryAgain";
import TextContainer  from '../TextConatiner/TextContainer'


test("document should render properly ", () => {
  const onClick = jest.fn();
  const props = {
    startAgain: onClick,
    words: 2,
    characters: 33,
    mistakes: 3,
  };

  render(<TryAgain {...props} />);

  const buttonElement = screen.getByText(/Start Again/);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});


  
