import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import style from './DataFilter.module.scss'


export default function DataFilter() {
  const [dataStart, setDataStart] = React.useState('');
  const [dataEnd, setDataEnd] = React.useState('');

  const handleChangeStart = (event) => {
    setDataStart(event.target.value);
  };

  const handleChangeEnd = (event) => {
    setDataEnd(event.target.value);
  };

  return (
    <div className={style.DataFilter }>
      <FormControl className={style.DataFilter__form }>
        <InputLabel id="dataStart">Month</InputLabel>
        <Select
          labelId=""
          id="data.start"
          value={dataStart}
          onChange={handleChangeStart}
          label="Month"
        >

          <MenuItem value={1}>January</MenuItem>
          <MenuItem value={2}>February</MenuItem>
          <MenuItem value={3}>March</MenuItem>
          <MenuItem value={4}>April</MenuItem>
          <MenuItem value={5}>May</MenuItem>
          <MenuItem value={6}>June</MenuItem>
          <MenuItem value={7}>July</MenuItem>
          <MenuItem value={8}>August</MenuItem>
          <MenuItem value={9}>September</MenuItem>
          <MenuItem value={10}>October</MenuItem>
          <MenuItem value={11}>November</MenuItem>
          <MenuItem value={12}>December</MenuItem>
        </Select>
        </FormControl>

        <FormControl className={style.DataFilter__form }>
        <InputLabel id="dataEnd">Year</InputLabel>
        <Select
          labelId=""
          id="data.end"
          value={dataEnd}
          onChange={handleChangeEnd}
          label="Year"
        >

          <MenuItem value={1}>2013</MenuItem>
          <MenuItem value={2}>2014</MenuItem>
          <MenuItem value={3}>2015</MenuItem>
          <MenuItem value={4}>2016</MenuItem>
          <MenuItem value={5}>2017</MenuItem>
          <MenuItem value={6}>2018</MenuItem>
          <MenuItem value={7}>2019</MenuItem>
          <MenuItem value={8}>2020</MenuItem>
          <MenuItem value={9}>2021</MenuItem>
          <MenuItem value={10}>2023</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}