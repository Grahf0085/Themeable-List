import React from 'react';
import { useAvailableThemes, useSetSelectedTheme } 
  from '../state/ColorProvider';
import styles from '../styles.css';

const Header = () => {

  const availableThemes = useAvailableThemes();
  const setSelectedTheme = useSetSelectedTheme();

  const handleChange = ({ target }) => setSelectedTheme(target.value);

  return (
    <header>
      <ul>
        {availableThemes.map((color) => (
          <li key={color} className={styles.selectorli}>
            <label>{color}</label>
            <input type="radio" name="theme" 
              value={color} onChange={handleChange} />
          </li>
        ))}
      </ul>
    </header>
  );

};

export default Header;
