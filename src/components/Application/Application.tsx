import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './store';

import { Calculator } from '#components/Calculator';
import { GlobalStyle } from './styled';

export const Application = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Calculator />
    </Provider>
  );
};
