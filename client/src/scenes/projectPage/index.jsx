import { Box, Button, Typography, Grid, useMediaQuery, MenuItem, Select, Paper } from '@mui/material';
import {useParams} from 'react-router-dom';
import Navbar from 'scenes/navbar';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useState} from 'react';
import ProjectsWidget from 'scenes/widgets/projectsWidget';




const ProjectPage = () => {
  const [myProjects, setMyProjects] = useState([]);
  const {userId} = useParams();

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

	const filteredProjects = selectedCategory === 'all'
    ? myProjects
    : myProjects.filter((project) => project.category === selectedCategory);

	
  


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
							<Select value={selectedCategory} onChange={handleCategoryChange}>
								<MenuItem value='all'>Alla projekt</MenuItem>
								<MenuItem value= 'yours'>Dina projekt</MenuItem>
								<MenuItem value='others'>Andras projekt</MenuItem>
							</Select>
						</Box>
          </Grid>
					{filteredProjects?.length > 0 ? (
            filteredProjects?.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ProjectsWidget
                  postId={project.postId}
                  postUserId={project.userId}
                  name={project.name}
                  description={project.description}
                  location={project.location}
                  picturePath={project?.picturePath}
                  userPicturePath={project?.userPicturePath}
                  likes={project?.likes}
                  comments={project?.comments}
                />
                {/* <Button variant="contained" color="error" style={{ marginTop: '1rem' }}
                  onClick={() => handleRemoveItem(index)}>Remove</Button> */}
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Grid container spacing={2} justify='center'>
                  <Grid item>
                    <Typography variant='h6' component='h2'>
                      Du har inga projekt i denna kategorin.
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          )}
						
        </Grid>
      </Box>


      
         <Button onClick={()=>navigate(`/projects/new/${user._id}`)}>
				Skapa projekt
			</Button>
      
    </Box>

			
        
   );
};

export default ProjectPage;