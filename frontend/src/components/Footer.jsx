import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Footer = () => {

    const [value, setValue] = React.useState(0);

  return (
    <Grid item xs={12}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{backgroundColor: '#212121' , alignItems:'center' }}
      >
        <Typography color={'white'}> Tech-Ops @2023 </Typography>
      </BottomNavigation>
    </Grid>
  );
}

export default Footer
