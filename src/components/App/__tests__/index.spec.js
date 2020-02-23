import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import axios from 'axios';

import App from '../index';

import * as response from '../../__mocks__/response.json';

jest.mock('axios');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Should component render correctly...', () => {
    it('with some content', async () => {});
  });
});
