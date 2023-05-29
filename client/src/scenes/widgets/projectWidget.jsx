import {
	ChatBubbleOutlineOutlined,
	FavoriteBorderOutlined,
	FavoriteOutlined,
	ShareOutlined,
	BookmarkBorder,
	BookmarkOutlined,
} from '@mui/icons-material';
import {Box, Divider, IconButton, Typography, useTheme, Button, TextField} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
//import Friend from 'components/Friend';
import WidgetWrapper from 'components/WidgetWrapper';
//import PostCategorizer from './PostCategorizer';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPost} from 'state';
import axios from 'axios';
 


const ProjectWidget = ({
						projectId,
						projectOwnerId,
						title,
						info,
						category,
						picturePath
					}) => {
	//const [isComments, setIsComments] = useState(false);
	//const [newcomment, setNewComment] = useState('');
	//const [PostCategory, setPostCategory] = useState(false);
	//const dispatch = useDispatch();
	const token = useSelector((state) => state.token);
	const loggedInUserId = useSelector((state) => state.user._id);
	//const isLiked = Boolean(likes[loggedInUserId]);
	//const likeCount = Object.keys(likes).length;
 
	const {palette} = useTheme();
	const main = palette.neutral.main;
	const primary = palette.primary.main;
 
	//const [loadcomments, setLoadComments] = useState([]);
 
	useEffect(() => {
    axios.get(`http://localhost:3001/projects/${projectId}/get/comment`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      
      .catch(error => {
        console.error(error);
      });
  }, [projectId, token]);

	return (
		<WidgetWrapper m='2rem 0'>
      <FlexBetween mt='0.25rem'>
    
      </FlexBetween>


      <Box mt='0.5rem'>
        {ProjectCategory && <ProjectCategorizer postId={postId} likes={likes} picturePath={picturePath}
                                          userPicturePath={userPicturePath}
                                          name={name}
                                          description={description}
                                          location={location}
                                          comments={comments} />}
      </Box>
    </WidgetWrapper>
		

	);
};
		
 
export default ProjectWidget;