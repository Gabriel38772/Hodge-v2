import {Box, Typography} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';



const ProjectWidget = ({
						projectId,
						title,
						info,
						category
					}) => {

	const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const navigate = useNavigate();
	const [ setProject] = useState(null);

	const getProject = async () => {
    const response = await fetch(
      `http://localhost:3001/projects/${projectId}`,
      {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      },
    );
    const data = await response.json();
    dispatch(setProject({projects: data}));
  };

  
	useEffect(() => {
    getProject();
  } ); 

 
	

	return (
		<WidgetWrapper m='2rem 0'>
      <FlexBetween mt='0.25rem' onClick={() => navigate(`/projects/${projectId}`)} 
      style={{
              cursor: 'pointer',
            }}>
				<Typography>
				<p>{title}</p>
				<p>{info}</p>
				<p>{category}</p>
				</Typography>
      </FlexBetween>
      <Box mt='0.5rem'>
      </Box>
    </WidgetWrapper>
		

	);
};
		
 
export default ProjectWidget;