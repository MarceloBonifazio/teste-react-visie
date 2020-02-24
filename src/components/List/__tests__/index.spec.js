import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import List from '../index';

import * as response from '../../../__mocks__/response.json';

const { data } = response;

jest.mock('../../Person', () => ({
  __esModule: true,
  default: () => <div>Person</div>,
}));

const removeItem = jest.fn();

describe('List', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Should component render correctly...', () => {
    it('Without data', () => {
      const { baseElement, getByText } = render(
        <List removeItem={removeItem} items={[]} />
      );
      expect(baseElement).toMatchSnapshot();
      expect(getByText(/Lista vazia/)).toBeInTheDocument();
    });

    it('With mock response', () => {
      const { baseElement, queryAllByText, queryByText } = render(
        <List removeItem={removeItem} items={data.results} />
      );
      expect(baseElement).toMatchSnapshot();
      expect(queryByText(/Lista vazia/)).not.toBeInTheDocument();
      expect(queryAllByText(/Person/).length).toStrictEqual(10);
    });
  });
});
