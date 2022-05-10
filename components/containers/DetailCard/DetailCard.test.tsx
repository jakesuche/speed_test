import React from "react";

import { render, screen } from "@testing-library/react";
import DetailCard from './DetailCard'


test("document should render properly ", ()=> {
  const datas = {
    cardName:"card1",
    cardValue:3
  }
  render(<DetailCard  cardName={datas["cardName"]} cardValue={datas["cardValue"]}  />)
  expect(screen.getByText("card1")).toBeInTheDocument()
  expect(screen.getByText(/3/i)).toBeInTheDocument()
})



