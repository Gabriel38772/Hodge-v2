import {Box, Button, Typography, useTheme, /*useMediaQuery*/} from '@mui/material';
import {useSelector} from 'react-redux';
import Navbar from 'scenes/navbar';
import Form from './form.jsx';
import {useNavigate} from 'react-router-dom';



const ProjectPage = () => {
   const theme = useTheme ();
   //const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
	const { picturePath } = useSelector((state) => state.user)
	const navigate = useNavigate();


   return(
		<Box>
			<Navbar />
			<Box width='100%' backgroundColor={theme.palette.background.alt} p='1rem 6%' textAlign='center'>
				<Typography
				fontWeight='bold'
				fontSize='32px'
				color='primary'
				>
				Skapa ett nytt projekt!
				</Typography>

				<Form />
			</Box>
		</Box>
	)	
};

export default ProjectPage;