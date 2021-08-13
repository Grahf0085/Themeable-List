import React from 'react';
import Header from '../Header';
import ToonList from '../toons/ToonList';
import ToonToggle from '../toons/ToonToggle';

export default function App() {
  return (
    <>
      <Header />
      <ToonToggle />
      <ToonList />
    </>
  );
}
