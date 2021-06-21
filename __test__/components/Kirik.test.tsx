import * as React from 'react'
import {render, screen} from '@testing-library/react';
import Kirik from '../../components/Kirik'

describe("Kirik", () => {
  it("should render the content", () => {
    render(<Kirik />);

    const heading = screen.getByText(
      /Hello Kirik/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});