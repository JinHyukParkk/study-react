import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const CustomSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        id="demo-simple-select-outlined"
        displayEmpty
      >
        <MenuItem value="">선택해주세요</MenuItem>
        <MenuItem value="option1">옵션 1</MenuItem>
        <MenuItem value="option2">옵션 2</MenuItem>
        <MenuItem value="option3">옵션 3</MenuItem>
      </Select>
    </div>
  );
};

export default ExampleSelect;