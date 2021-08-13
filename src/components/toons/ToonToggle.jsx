import React from 'react';
import {
  useAvailableAPIs,
  useSetSelectedApi,
} from '../../state/ToonProvider';

const ToonToggle = () => {
  const availableApis = useAvailableAPIs();
  const setSelectedApi = useSetSelectedApi();

  const handleChange = ({ target }) => setSelectedApi(target.value);

  return (
    <ul>
      {availableApis.map((api) => (
        <li key={api}>
          <label>{api}</label>
          <input type="radio" name="api" value={api} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );
};

export default ToonToggle;
