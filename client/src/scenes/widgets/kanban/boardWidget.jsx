
import {Box, Typography, Divider, useTheme} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ColumnWidget from './columnsWidget';

const BoardWidget = ({projectId}) => {
  const [project, setProject] = useState(null);
  const [currentProject, setCurrentProject] = useState('');
  const {_id} = useSelector((state) => state.projects);

  const {palette} = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;


  const getRekt = async () => {
    const response = await fetch(`http://localhost:3001/projects/${projectId}`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    });
    const data = await response.json();
    setProject(data);
  };


  const updateLit = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/projects/${projectId}`,
        {title, info, category},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      setProject(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getRekt();
    localStorage.setItem('projectId', projectId);
    const cu = localStorage.getItem('projectId');
    setCurrentProject(cu);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!project) {
    return null;
  }

  const {
    title,
    info,
    category
  } = project;
  const handleSubmit = () => {
    updateLit();

  };
  


  const ProfileId = window.location.pathname.split('/').pop();

  console.log('103', projectId === ProfileId, ProfileId, _id);
  return (
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap='0.5rem'
        pb='1.1rem'
        //onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap='1rem'>
          
          <Box>
            <Typography
              variant='h4'
              color={dark}
              fontWeight='500'
              sx={{
                '&:hover': {
                  color: palette.primary.light,
                  cursor: 'pointer',
                },
              }}
            >
              <ColumnWidget projectId={projectId} />
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />
  
    </WidgetWrapper>
  );

};

export default BoardWidget;