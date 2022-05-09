import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "@testing-library/react";
import DetailCard from './DetailCard'
import {Person} from "./Person"


test("render number", () => {
  render(<Person name="uche" />)
  const linkElement = screen.getByText(/Uchechukwu/i)
  

  expect(linkElement).toBeInTheDocument()
 
})


describe("HomePage", () => {
  it("should render the heading", () => {
    render(<DetailCard cardName="name" cardValue={200}   />);

    const heading = screen.getByText(
      /name/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});