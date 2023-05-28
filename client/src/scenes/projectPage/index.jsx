import { Box, Button } from '@mui/material';
import Navbar from 'scenes/navbar';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';



const ProjectPage2 = () => {
   const navigate = useNavigate();
   const user = useSelector((state) => state.user);

   return (
   	<Box>
         <Navbar />
      	nära döden

         <Button onClick={()=>navigate(`/createProject/${user._id}`)}>
				SNällamy dude
			</Button>
      
    </Box>

			
        
   );
};

export default ProjectPage2;