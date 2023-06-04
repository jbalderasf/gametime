import React, { useState, useCallback } from 'react';
import logo from './assets/gametime_logo.svg';
import './App.css';
import SearchInput from './components/searchInput/SearchInput';
import ListResult from './components/listResults/ListResults';
import { debounce } from 'lodash';

function App() {
  const [value, setValue] = useState('');
  const handleChange = (v) => {
    setValue(v);
  };

  const debounceChangeForm = useCallback(debounce(handleChange, 1000), []);

  return (
    <div className="App">
      <div className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchInput onChange={debounceChangeForm} />
        <ListResult query={value} />
      </div>
    </div>
  );
}

export default App;
