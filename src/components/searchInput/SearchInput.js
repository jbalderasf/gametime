import React, { useState } from 'react';
import './styles.css';
import { Icon } from '@iconify/react';

export default function SearchInput({ onChange }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };
  return (
    <div className="container">
      <Icon icon="material-symbols:search" width={20} height={20} />
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
