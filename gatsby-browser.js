/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from './src/themes/customTheme.js';
import CssBaseline from '@material-ui/core/CssBaseline';

// need to test the affect of PersistGate
export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={ customTheme }>
      <CssBaseline/>
      { element }
    </ThemeProvider>
  );
};
