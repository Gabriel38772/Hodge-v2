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
import {setProjects} from 'state';


/*
const projectSchema = yup.object().shape({
	title: yup.string().required('required'),
	info: yup.string().required(''),
	category: yup.string().required('required'),
	picture: yup.string()
	});
	*/

const initialValues = {
	title: "",
	info: "",
	category: "",
	picture: ""
};


const Form = () => {
	const{ palette } = useTheme(); //Kopplar till temat
	const dispatch = useDispatch();
	const navigate = useNavigate(); //Låter en navigera mellan sidor.
	const isNonMobile = useMediaQuery("(min-width: 600px)");
	const user = useSelector((state) => state.user);
	const [setProject] = useState('');
	const token = useSelector((state) => state.token);
	const [ setImage] = useState(null);

	const loggedInUserId = useSelector((state) => state.user._id);




	const projectCreated = async (values) => {
		const formData = new FormData(); //Låter en skicka bild som del av formulärinfon
		formData.append('projectOwnerId', loggedInUserId);
		for (let value in values){
			formData.append(value, values[value])
		}
		formData.append('picturePath', values.picture.name);
		
		const projectCreatedResponse = await fetch(
			"http://localhost:3001/project", { //glöm inte ändra!!
			method: 'POST',
      headers: {Authorization: `Bearer ${token}`},
      body: formData,
    });
		const projects = await projectCreatedResponse.json();
			dispatch(setProjects({projects}));
			setImage(null);
			setProject('');

		if (projectCreated) {
			navigate(`/projects/${user._id}`);
		

		}
		//Om det inte funkar måste vi säga det och be den göra om!!
	};

	const handleFormSubmit = async(values, onSubmitProps) => {
		await projectCreated(values, onSubmitProps);
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
							label="Projektnamn"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.title}
							name="title"
							error={Boolean(touched.title) && Boolean(errors.title)} //Om fältet är tome efter blivit rört eller där kommer error. 
							helperText={touched.title && errors.title}
							sx={{ gridColumn: "span 2"}}/>

						<TextField
							label="Om projektet!"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.info}
							name="info"
							error={Boolean(touched.info) && Boolean(errors.info)} //Om fältet är tome efter blivit rört eller där kommer error. 
							helperText={touched.info && errors.info}
							sx={{ gridColumn: "span 2"}}/>

						<TextField
							label="Projektkategori"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.category}
							name="category"
							error={Boolean(touched.category) && Boolean(errors.category)} //Om fältet är tome efter blivit rört eller där kommer error. 
							helperText={touched.category && errors.category}
							sx={{ gridColumn: "span 2"}}/>

						<Box
							gridColumn='span 4'
							border={`1px solid ${palette.neutral.medium}`}
							borderRadius='5px'
							p='1rem'
						>
							<Dropzone
								acceptedFiles='.jpg,.jpeg,.png'
								multiple={false} //Endast en bild kan läggas till
								onDrop={acceptedFiles =>
									setFieldValue('picture', acceptedFiles[0])}
							>
								{({getRootProps, getInputProps}) => (
									<Box
										{...getRootProps()}
										border={`2px dashed ${palette.primary.main}`}
										p='1rem'
										sx={{':&hover': {cursor: 'pointer'}}}
									>
										< input {...getInputProps()} />
										{!values.picture ? ( //Om det inte finns en picture så ska följande text stå
											<p>Add Picture Here</p>
										) : (
											<FlexBetween>
												<Typography> {values.picture.name} </Typography>
												<EditOutlined />
											</FlexBetween>
										)}

									</Box> )}
							</Dropzone>
						</Box>		
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
						{"Skapa projekt"}
					</Button>

					<Button onClick={()=>navigate(`/projects/${user._id}`)}>
						skit samma
					</Button>

				</Box>
			</form>
		)}

	</Formik>
	)
};


export default Form;