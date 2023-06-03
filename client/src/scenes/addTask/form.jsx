import {
	Box,
	Button,
	TextField,
	useMediaQuery,
	Typography,
	useTheme } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import { Formik } from 'formik';
//import * as yup from 'yup'; //Form validation
//import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Dropzone from 'react-dropzone'; //Låter användare "drop" en fil för att kunna ladda upp den på sidan
import FlexBetween from '../../components/FlexBetween';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {setTasks} from 'state';



const initialValues = {
	title: "",
  //Hade varit najs med dropdown
};


const Form = ({projectId}) => {
	const{ palette } = useTheme(); //Kopplar till temat
	const dispatch = useDispatch();
	const navigate = useNavigate(); //Låter en navigera mellan sidor.
	const isNonMobile = useMediaQuery("(min-width: 600px)");
	const [setTask] = useState('');
	const token = useSelector((state) => state.token);






	const taskCreated = async (values) => {
		const formData = new FormData(); //Låter en skicka bild som del av formulärinfon
		formData.append('forProject', projectId);
		for (let value in values){
			formData.append(value, values[value])
		}
		formData.append('picturePath', values.picture.name);
		
		const taskCreatedResponse = await fetch(
			`http://localhost:3001/task`, { //glöm inte ändra!!
			method: 'POST',
      headers: {Authorization: `Bearer ${token}`},
      body: formData,
    });
		const tasks = await taskCreatedResponse.json();
			dispatch(setTasks({tasks}));
			setTask('');

		if (taskCreated) {
			navigate(`/project/${projectId}`);
		

		}
		//Om det inte funkar måste vi säga det och be den göra om!!
	};

	const handleFormSubmit = async(values, onSubmitProps) => {
		await taskCreated(values, onSubmitProps);
	};

	return(
		<Formik onSubmit={handleFormSubmit}
            initialValues= {initialValues}
		>

		{({
			values,
			errors,
			touched,
			handleBlur,
			handleChange,
			handleSubmit,
			setFieldValue,
			resetForm
		}) => (
			<form onSubmit={handleSubmit}>
				<Box 
					display="grid" 
					gap="30px" 
					gridTemplateColumns="repeat(4, minmax(0,1fr))"
					// Om det inte är mobile ska den vara undefined. Om det är mobile sätts span till 4.
					sx={{"&>div": {gridColumn: isNonMobile ? undefined : "span 4"}, }}
					> 
					<>
						<TextField
							label="Title"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.title}
							name="title"
							error={Boolean(touched.title) && Boolean(errors.title)} //Om fältet är tome efter blivit rört eller där kommer error. 
							helperText={touched.title && errors.title}
							sx={{ gridColumn: "span 2"}}/>

					</>
				</Box>
				{/*Knappar*/}
				<Box>
					<Button
						fullWidth
						type="submit"
						sx={{
							m: "2rem 0",
							p: "1rem",
							backgroundColor: palette.primary.light,
							color: palette.background.main,
							"&:hover": { color: palette.primary.main }}}
					>
						{"Lägg till task"}
					</Button>

					<Button onClick={()=>navigate(`/project/${projectId}`)}>
						skit samma
					</Button>

				</Box>
			</form>
		)}

	</Formik>
	)
};


export default Form;