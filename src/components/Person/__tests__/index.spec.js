import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';

import Person from '../index';

let removeItem = jest.fn();

describe('SimpleSelect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Should component render correctly...', () => {
    it('Without data', () => {
      const { baseElement } = render(<Person removeItem={removeItem} />);
      expect(baseElement).toMatchSnapshot();
    });

    it('With some data', () => {
      const { baseElement, debug, queryByText, getByText } = render(
        <Person
          name="Marcelo Bonifazio"
          color="black"
          id="5"
          removeItem={removeItem}
        />
      );
      // debug();
      expect(baseElement).toMatchSnapshot();
      console.log(
        getByText(/Marcelo Bonifazio/).getAttribute('style')
      );
      expect(queryByText(/Marcelo Bonifazio/)).toBeInTheDocument();
    });
  });
});
