import { Box } from '@mui/material';
import Navbar from 'scenes/navbar';
import WidgetWrapper from 'components/WidgetWrapper';

const ProjectPage = () => {
   return (
   	<Box>
         <Navbar />
      	projectpage

			<Typography
          fontWeight='bold'
          fontSize='clamp(1rem, 2rem, 2.25rem)'
          color='primary'
          onClick={() => navigate('/home')}
          sx={{ /*Låter oss ha css kod */
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          Hodge
        </Typography>


      <WidgetWrapper>
      {/* FIRST ROW */}
        <FlexBetween
          gap='0.5rem'
          pb='1.1rem'
          onClick={() => navigate(`/profile/${userId}`)}
        >
          <FlexBetween gap='1rem'>
            <UserImage image={picturePath} />
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
                {firstName} {lastName}
              </Typography>
              <Typography color={medium}>{friends.length} friends</Typography>
            </Box>
          </FlexBetween>
          <ManageAccountsOutlined />
        </FlexBetween>
      </WidgetWrapper>
      
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        gap='0.5rem'
        pb='1.1rem'
        onClick={() => navigate(`/profile/${userId}`)}
      ></FlexBetween>
      </Box>
        
   );
};

export default ProjectPage;