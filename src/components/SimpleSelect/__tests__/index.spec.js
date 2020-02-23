import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import axios from 'axios';

import SimpleSelect from '../index';

import * as response from '../../__mocks__/response.json';

jest.mock('axios');

describe('SimpleSelect', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Should component render correctly...', () => {
    it('with some content', async () => {});
  });
});
