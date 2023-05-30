import Navbar from 'scenes/navbar';
import { Box, Button, Typography, Grid, useMediaQuery, MenuItem, Select } from '@mui/material';
import kanbanboard from '../../components/kanbanboard';
import { useParams } from 'react-router-dom';
import WidgetWrapper from 'components/WidgetWrapper';
import FlexBetween from 'components/FlexBetween';

const projectPage = () => {
  const [project, setProject] = useState(null);
  const {projectId} = useParams();
  //const token = useSelector((state) => state.token);
  //const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const handleProject = async () => {
    const formData = new FormData();
    formData.append('userId', _id);
    formData.append('description', post);
    if (image) {
      formData.append('picture', image);
      formData.append('picturePath', image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      headers: {Authorization: `Bearer ${token}`},
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({posts}));
    setImage(null);
    setPost('');
  };

  const getProject = async () => {
    const response = await fetch(`http://localhost:3001/projects/${projectId}`, {
      method: 'GET'
    });
    const data = await response.json();
    setProject(data);
  };

  useEffect(() => {
    getProject();
  }, [])

  return (
    <WidgetWrapper>
      <FlexBetween>
      <Box>
      <Navbar />
        <Typography>
          detta är projekt: {projectId}
        </Typography>
      </Box>

    <Button
    disabled={!post}
    onClick={handlePost}
    sx={{
      color: palette.background.alt,
      backgroundColor: palette.primary.main,
      borderRadius: '3rem',
    }}
    >
    POST
    </Button>
      </FlexBetween>

    </WidgetWrapper>
    
  );

};
  
  
 



export default projectPage;