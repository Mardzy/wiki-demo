import * as React from 'react';

import { Home } from './containers';

import 'antd/dist/antd.css';
import './styles/main.scss'

/**
 * Currently only one component
 * This is where I would handle routing if more pages/functionality was needed
 */
const App: React.FC = () => {
  return (
    <Home />
  );
};
export default App;
