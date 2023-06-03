import {Box, useMediaQuery, Button} from '@mui/material';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Navbar from 'scenes/navbar';
import {useSelector} from 'react-redux';
import ProjectWidget from 'scenes/widgets/testWidget';
import WidgetWrapper from 'components/WidgetWrapper';
import FlexBetween from 'components/FlexBetween';
import KanbanBoard from 'components/kanbanboard'
import BoardWidget from 'scenes/widgets/kanban/boardWidget';
import {useNavigate} from 'react-router-dom';



const ProjectPage = () => {
  const [project, setProject] = useState(null);
  const {projectId} = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
  const navigate = useNavigate();


  const getProject = async () => {
    const response = await fetch(`http://localhost:3001/projects/${projectId}`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await response.json();
    setProject(data);
};

  useEffect(() => {
    getProject();
  }, [] );

  if (!project) return null;

  return (
    <>
    <WidgetWrapper>
      <FlexBetween>
        <Box display={isNonMobileScreens ? 'flex' : 'block'}>
        <Navbar />
        </Box>
        
      <Button onClick={()=>navigate(`/task/new/${projectId}`)}>
				Lägg till task
			</Button>

        
        
      </FlexBetween>
    </WidgetWrapper>
  
   
    <Box>
        <ProjectWidget projectId={projectId} />
        <BoardWidget projectId={projectId} />
        <KanbanBoard />
    </Box>
  
    </>
    
    
  );

};
  
  
export default ProjectPage;