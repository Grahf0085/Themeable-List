import React from 'react';
import { useToons } from '../../state/ToonProvider';
import Toon from './Toon';
import { useTheme } from '../../state/ColorProvider';


const ToonList = () => {
  const toons = useToons();
  const theme = useTheme();

  const toonElements = toons.map((toon) => (
    <li key={toon.name}
      style={{ 
        backgroundColor: theme.background,
        color: theme.foreground 
      }}>
      <Toon {...toon} />
    </li>
  ));

  return <ul>{toonElements}</ul>;
};

export default ToonList;
