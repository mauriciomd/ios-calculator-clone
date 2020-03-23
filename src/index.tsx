import React from 'react';
import { StatusBar } from 'react-native';

import Main from './pages/Main';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Main />
    </>
  );
}
