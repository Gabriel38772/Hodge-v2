import {Box, Typography, useTheme, useMediaQuery} from '@mui/material';
import Form from './Form';
import Navbar from 'scenes/navbar';

const ProjectPage = () => {
    const theme = useTheme ();
    const isNonMobileScreens = useMediaQuery('(min-width:100px)');

    return <Box>
        <Navbar />

        <Box width='100%' backgroundColor={theme.palette.background.alt} p='1rem 6%' textAlign='center'>
            <Typography
            fontWeight='bold'
            fontSize='32px'
            color='primary'>
            Skapa ett nytt projekt!
            </Typography>
        </Box>

        <Box>
            <Form />


        </Box>

        projectpage
        </Box>;
};

export default ProjectPage;