//Låter oss återanvända denna css kod eftersom den behövs på många ställen i koden. 

import {Box} from '@mui/material';
import {styled} from '@mui/system';

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export default FlexBetween;