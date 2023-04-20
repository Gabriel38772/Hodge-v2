/*  Importing dependencies from MUI */ 

import {Box} from '@mui/material';
import {styled} from '@mui/material';

/* Creating flexbetween componenet */ 

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

/* Export flexbetween */

export default FlexBetween;