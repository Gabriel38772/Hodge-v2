/*

import {Box, Typography, useMediaQuery} from '@mui/material';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import Navbar from 'scenes/navbar';
import ProjectWidget from 'scenes/widgets/projectWidget';
import CreateNewBoard from '../../components/kanban/createNewBoard';


const ProjectPage = () => {
  const [project, setProject] = useState(null);
  const {projectId} = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const getProject = async () => {
    const response = await fetch(`http://localhost:3001/projects/${projectId}`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    });
    const data = await response.json();
    setProject(data);
  };

  useEffect(() => {
    getProject();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!project) return null;

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
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <CreateNewBoard>
            hej?
          </CreateNewBoard>
        </Box>
        
      </Box>
    </Box>
  );
};

export default ProjectPage;

*/