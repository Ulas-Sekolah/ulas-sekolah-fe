import * as React from 'react'
import {getByText, render, screen} from '@testing-library/react';
import SubHeading from '../../../components/atoms/SubHeading/SubHeading'

describe("SubHeading", () => {
  it("should render the content", () => {
    const { container, getByText } = render(<SubHeading classText='foo'>Hello, Dude!</SubHeading>);

    expect(getByText('Hello, Dude!')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('foo')
  });
}); 

