import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import faker from 'faker';
import Person from '../index';

let removeItem = jest.fn();

describe('Person', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Should component render correctly...', () => {
    it('Without data', () => {
      const { baseElement } = render(<Person removeItem={removeItem} />);
      expect(baseElement).toMatchSnapshot();
    });

    it('With some data', () => {
      const { baseElement, getByText } = render(
        <Person
          name="Marcelo Bonifazio"
          color="black"
          id="5"
          removeItem={removeItem}
        />
      );
      expect(baseElement).toMatchSnapshot();
      expect(getByText(/Marcelo Bonifazio/)).toBeInTheDocument();
      expect(getByText(/Marcelo Bonifazio/)).toHaveStyle('color: black');
    });

    it('With another data', () => {
      const { baseElement, getByText } = render(
        <Person name="Teste" color="blue" id="5" removeItem={removeItem} />
      );
      expect(baseElement).toMatchSnapshot();
      expect(getByText(/Teste/)).toBeInTheDocument();
      expect(getByText(/Teste/)).toHaveStyle('color: blue');
    });

    it('Action should remove correctly element', () => {
      const id = faker.random.number(999999999).toString();

      removeItem = value => {
        expect(value).toStrictEqual(id);
      };

      const { baseElement, getByText } = render(
        <Person name="Teste" color="blue" id={id} removeItem={removeItem} />
      );
      expect(baseElement).toMatchSnapshot();
      fireEvent.click(getByText(/Teste/).parentNode.querySelector('button'));
    });
  });
});
