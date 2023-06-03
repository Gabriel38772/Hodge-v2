import {Box, Typography} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setColumns} from 'state';


const ColumnWidget = ({
          title,
          forProject,
          columnId
					}) => {

	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const navigate = useNavigate();
	const [ setColumn ] = useState(null);

	const getColumn = async () => {
    const response = await fetch(
      `http://localhost:3001/columns/${columnId}`,
      {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    const data = await response.json();
    dispatch(setColumn({columns: data}));
  };

  
	useEffect(() => {
    getColumn();
  } ); 


	return (
		<WidgetWrapper m='2rem 0'>
      <FlexBetween mt='0.25rem' > 
				<Typography>
				<p>{title}</p>
        <p>{forProject}</p>
        <p>{columnId}</p>
				
				</Typography>
      </FlexBetween>
      <Box mt='0.5rem'>
      </Box>
    </WidgetWrapper>
		

	);
};
		
 
export default ColumnWidget;