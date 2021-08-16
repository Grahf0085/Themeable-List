import React from 'react';
import Header from '../Header';
import ToonList from '../toons/ToonList';
import ToonToggle from '../toons/ToonToggle';
import styles from '../../styles.css';

export default function App() {
  return (
    <section className={styles.container}>
      <Header />
      <ToonToggle />
      <ToonList />
    </section>
  );
}
