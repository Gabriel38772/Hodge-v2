import { Box, Button, Typography, Grid, useMediaQuery, MenuItem, Select } from '@mui/material';
import {useParams} from 'react-router-dom';
import Navbar from 'scenes/navbar';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useState} from 'react';
import ProjectsWidget from 'scenes/widgets/projectsWidget';




const ProjectPage = () => {
  const [myProjects, setMyProjects] = useState([]);
  const {projectId} = useParams();
  

  const navigate = useNavigate();
   
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getMyProjects = () => {
    const myProjects = window.localStorage.getItem('myProjects');
    const data = JSON.parse(myProjects);
    setMyProjects(data);
    console.log('19-->', data);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


	const filteredProjects = myProjects;
  
  
  /*selectedCategory === 'all'
    ? myProjects
    : myProjects.filter((project) => project.owner === userId); */
    
  return (
  	<Box>
      <Navbar />
      <Box
				width='100%'
				padding='2rem 6%'
				display={isNonMobileScreens ? 'flex' : 'block'}
				gap='2rem'
				justifyContent='center'
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
						<Typography variant='h4' component='h1'>
							Dina projekt
						</Typography>
          </Grid>
        	<Grid item xs={12}>
						<Box display='flex' justifyContent='flex-end'>
							<Select value={selectedCategory} onChange={handleCategoryChange} >
								<MenuItem value='all'>Alla projekt</MenuItem>
								<MenuItem value= 'userId'>Dina projekt</MenuItem>
								<MenuItem value='others'>Andras projekt</MenuItem>
							</Select>
						</Box>
          </Grid>
          <Box>
         
            <ProjectsWidget projectId={projectId}/>
            
          </Box>
            
        
						
        </Grid>
      </Box>


      
         <Button onClick={()=>navigate(`/projects/new/${user._id}`)}>
				Skapa projekt
			</Button>
      
    </Box>

			
        
   );
};

export default ProjectPage;