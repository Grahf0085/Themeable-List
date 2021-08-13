import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { ToonProvider } from './state/ToonProvider';
import { ColorProvider } from './state/ColorProvider';

render(
  <ColorProvider>
    <ToonProvider>
      <App />
    </ToonProvider>
  </ColorProvider>,
  document.getElementById('root')
);
