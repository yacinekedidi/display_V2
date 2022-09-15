import {
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useStyles from '../../Utils/useStyles';
import useTheme from '../../Utils/useTheme';

const CategorySideBar = ({
  sellerNames,
  selectedSellers,
  setSelectedSellers,
}) => {
  const { theme } = useTheme();
  const { MenuProps, getStyles } = useStyles();

  return (
    <div
      className="w-full p-4 shadow-sm shadow-gray-500 lg:w-[25%]"
      style={{ backgroundColor: '#231f20' }}
    >
      <div className="py-2">
        <ThemeProvider theme={theme}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel sx={{ color: 'white' }}>Sellers</InputLabel>
            <Select
              sx={{
                '.MuiSelect-multiple': {
                  borderColor: 'white',
                },
              }}
              multiple
              value={selectedSellers}
              onChange={(e) => setSelectedSellers(e.target.value)}
              input={<OutlinedInput id="select-multiple-chip" label="seller" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip sx={{ color: 'white' }} key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {sellerNames.map((sellerName) => (
                <MenuItem
                  key={sellerName}
                  value={sellerName}
                  style={getStyles(sellerName, selectedSellers, theme)}
                >
                  {sellerName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default CategorySideBar;
