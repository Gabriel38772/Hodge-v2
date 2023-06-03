import {Box, Typography, useTheme} from '@mui/material';
import Navbar from 'scenes/navbar';
import Form from './form.jsx';
import {useParams} from 'react-router-dom';



const AddTask = () => {
	const {projectId} = useParams();
  const {palette} = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

   return(
		<Box>
			<Navbar />
			<Box width='100%' backgroundColor={palette.background.alt} p='1rem 6%' textAlign='center'>
				<Typography
				fontWeight='bold'
				fontSize='32px'
				color='primary'
				>
				Lägg till task!
				</Typography>

				<Form projectId={projectId} />
			</Box>
		</Box>
	)	
};

export default AddTask;