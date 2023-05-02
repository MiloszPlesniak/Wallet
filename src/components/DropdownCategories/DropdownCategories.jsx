import { useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import styles from './DropdownCategories.module.scss';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const listOfCategories = [
  'Main expenses',
  'Products',
  'Car',
  'Self care',
  'Child care',
  'Household products',
  'Education',
  'Leisure',
];

const DropdownCategories = () => {
  const [category, setCategory] = useState('');
  //   const open = Boolean(category);
  //   const handleClick = event => {
  //     setCategory(event.currentTarget);
  //   };
  //   const handleClose = () => {
  //     setCategory(null);
  //   };
  const handleChange = event => {
    setCategory(event.target.value);
    // event.target.blur();
  };

  return (
    <div className={styles.DropdownCategories}>
      <FormControl fullWidth variant="standard" blurOnSelect="true">
        {/* {category === '' ? (
          <InputLabel
            disableAnimation
            shrink={false}
            focused={false}
            id="expense-category"
          >
            Category
          </InputLabel>
        ) : null} */}

        <Select
          blurOnSelect="true"
          labelId="expense-category"
          id="expense-category"
          displayEmpty={true}
          value={category}
          onChange={handleChange}
          renderValue={value =>
            value?.length
              ? Array.isArray(value)
                ? value.join(', ')
                : value
              : 'Select a category'
          }
          sx={{ backgroundColor: 'white' }}
          //   style={{
          //     backgroundColor: 'white',
          //   }}
          //   sx={{ MuiList: { paddingTop: 0, paddingBottom: 0 } }}
          IconComponent={KeyboardArrowDownIcon}
          MenuProps={{
            disableAutoFocusItem: true,
            PaperProps: {
              style: {
                maxHeight: 300,
                borderRadius: '20px',
              },
            },
            MenuListProps: {
              style: {
                paddingTop: 0,
                paddingBottom: 0,
              },
            },
          }}
          onClose={() => {
            setTimeout(() => {
              document.activeElement.blur();
            }, 0);
          }}
        >
          {listOfCategories.map(category => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

    /* <TextField
        id="expense-category"
        select
        hiddenLabel
        // label={category ? '' : 'Select a category'}
        // placeholder="Select a category"
        value={category}
        onChange={handleChange}
        InputLabelProps={{
          shrink: false,
        }}
        // onChange={handleChange}
        // helperText="Please select your category"
        variant="standard"
        fullWidth
        style={{ margin: 0 }}
      >
        {listOfCategories.map(category => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField> */
  );
};

export default DropdownCategories;
