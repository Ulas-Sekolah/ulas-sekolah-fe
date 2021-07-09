import * as React from 'react'
import {getByText, render, screen} from '@testing-library/react';
import Text from '../../../components/atoms/Text/Text'

describe("Text", () => {
  it("should render the content", () => {
    const { container, getByText } = render(<Text classText='foo'>Hello, Dude!</Text>);

    expect(getByText('Hello, Dude!')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('foo')
  });
}); 

