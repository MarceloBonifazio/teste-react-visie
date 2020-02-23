import 'jest-extended';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '@material-ui/styles';

global.renderWithTheme = component =>
  render(<ThemeProvider>{component}</ThemeProvider>);
