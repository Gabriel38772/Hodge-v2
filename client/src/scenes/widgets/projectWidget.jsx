/*
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
						projectOwner,
						name,
						description,
						picturePath
					}) => {
	//const [isComments, setIsComments] = useState(false);
	//const [newcomment, setNewComment] = useState('');
	//const [PostCategory, setPostCategory] = useState(false);
	//const dispatch = useDispatch();
	//const token = useSelector((state) => state.token);
	const loggedInUserId = useSelector((state) => state.user._id);
	//const isLiked = Boolean(likes[loggedInUserId]);
	//const likeCount = Object.keys(likes).length;
 
	const {palette} = useTheme();
	const main = palette.neutral.main;
	const primary = palette.primary.main;
 
	//const [loadcomments, setLoadComments] = useState([]);
 

	return (
		<WidgetWrapper>
			<Box mt='0.5rem'>
				
			</Box>
		</WidgetWrapper>
		

	);
};
		
 
export default ProjectWidget;

*/