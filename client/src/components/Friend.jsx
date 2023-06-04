/* Importing dependencies from mui library and management module */ 

import {PersonAddOutlined, PersonRemoveOutlined} from '@mui/icons-material';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setFriends} from 'state';
import FlexBetween from './FlexBetween';
import UserImage from './UserImage';

/* Creating a component called friends that uses props */

const Friend = ({friendId, name, subtitle, userPicturePath}) => {

  /* from react and MUI */ 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {_id} = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

    // Creating colors for theme
  const {palette} = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  /* Check if friend exists when adding a friend */ 
  const isFriend = friends.find((friend) => friend._id === friendId);
  const isSelf = friendId === _id;


  // Function to patch the friend relationship in the database

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    dispatch(setFriends({friends: data}));
  };

  return (
    <FlexBetween>
      <FlexBetween gap='1rem'>
        <UserImage image={userPicturePath} size='55px' />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant='h5'
            fontWeight='500'
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cursor: 'pointer',
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize='0.75rem'>
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      {!isSelf && (
        <IconButton
          onClick={() => patchFriend()}
          sx={{backgroundColor: primaryLight, p: '0.6rem'}}
        >
          {isFriend ? (
            <PersonRemoveOutlined sx={{color: primaryDark}} />
          ) : (
            <PersonAddOutlined sx={{color: primaryDark}} />
          )}
        </IconButton>
      )}
    </FlexBetween>
  );
};

export default Friend;