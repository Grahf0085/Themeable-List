import React from 'react';
import { useAvailableThemes, useSetSelectedTheme } 
  from '../state/ColorProvider';

const Header = () => {

  const availableThemes = useAvailableThemes();
  const setSelectedTheme = useSetSelectedTheme();

  const handleChange = ({ target }) => setSelectedTheme(target.value);

  return (
    <ul>
      {availableThemes.map((color) => (
        <li key={color}>
          <label>{color}</label>
          <input type="radio" name="theme" 
            value={color} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );

};

export default Header;
