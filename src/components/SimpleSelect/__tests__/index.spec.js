import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SimpleSelect from '../index';

import * as response from '../../../__mocks__/response.json';

let id = 0;

const { data } = response;

data.results.forEach(el => {
  el.code = ++id;
  el.value = el.name;
});

let handleSelect = jest.fn();

describe('SimpleSelect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Should component render correctly...', () => {
    it('Without data', () => {
      const { getByText } = render(
        <SimpleSelect
          disabled
          hasError={false}
          id="person"
          label="Remover Item"
          list={[]}
          native
          onChange={handleSelect}
          value=""
        />
      );
      expect(getByText(/Remover Item/)).toBeInTheDocument();
      expect(
        getByText(/Remover Item/).parentNode.querySelector('select')
      ).toBeDisabled();
    });

    it('With mock response', () => {
      const { getByText } = render(
        <SimpleSelect
          disabled={false}
          hasError={false}
          id="person"
          label="Remover Item"
          list={data.results}
          native
          onChange={handleSelect}
          value=""
        />
      );
      expect(getByText(/Remover Item/)).toBeInTheDocument();
      expect(
        getByText(/Remover Item/).parentNode.querySelector('select')
      ).not.toBeDisabled();
    });

    it('With error', () => {
      const { getByText } = render(
        <SimpleSelect
          disabled={false}
          hasError="Um erro"
          id="person"
          label="Remover Item"
          list={data.results}
          native
          onChange={handleSelect}
          value=""
        />
      );
      expect(getByText(/Um erro/)).toBeInTheDocument();
    });

    it('Should call action correctly', () => {
      handleSelect = value => {
        expect(value.target.value).toStrictEqual('5');
      };

      const { getByTestId } = render(
        <SimpleSelect
          disabled={false}
          hasError={false}
          id="person"
          label="Remover Item"
          list={data.results}
          native
          onChange={handleSelect}
          value=""
        />
      );
      fireEvent.change(getByTestId('select'), {
        target: { value: '5' },
      });
    });
  });
});
