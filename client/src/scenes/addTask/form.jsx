import React, { useState } from 'react';
import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setTasks } from 'state';

import Dropzone from 'react-dropzone';
import FlexBetween from '../../components/FlexBetween';

const initialValues = {
  title: '',
  description: '' // Add missing field
};

const Form = ({ projectId }) => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery('(min-width: 600px)');
  const [task, setTask] = useState('');
  const token = useSelector((state) => state.token);

  const taskCreated = async (values) => {
    const formData = new FormData();
    formData.append('projectId', projectId);
    for (let value in values) {
      formData.append(value, values[value]);
    }

    const taskCreatedResponse = await fetch(
      `http://localhost:3001/task`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      }
    );
    const tasks = await taskCreatedResponse.json();
    dispatch(setTasks({ tasks }));
    setTask('');

    if (taskCreatedResponse.ok) {
      navigate(`/projects/${projectId}`);
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await taskCreated(values);
    onSubmitProps.resetForm(); // Use resetForm from onSubmitProps instead of resetForm function
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
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
            sx={{
              "&>div": {
                gridColumn: isNonMobile ? undefined : "span 4"
              }
            }}
          >
            <>
              <TextField
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={Boolean(touched.title) && Boolean(errors.title)}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                label="Detaljer"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={Boolean(touched.description) && Boolean(errors.description)}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />
            </>
          </Box>

          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.light,
                color: palette.background.main,
                "&:hover": { color: palette.primary.main }
              }}
            >
              {"LÃ¤gg till task"}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;

/*import {
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
	title: ""
  //Hade varit najs med dropdown
};


const Form = ({projectId}) => {
	const{ palette } = useTheme(); //Kopplar till temat
	const dispatch = useDispatch();
	const navigate = useNavigate(); //Låter en navigera mellan sidor.
	const isNonMobile = useMediaQuery("(min-width: 600px)");
	const [task, setTask] = useState('');
	const token = useSelector((state) => state.token);





	const taskCreated = async (values) => {
		const formData = new FormData(); //Låter en skicka bild som del av formulärinfon
		formData.append('projectId', projectId);
		for (let value in values){
			formData.append(value, values[value])
		};
		
		const taskCreatedResponse = await fetch(
			`http://localhost:3001/task`, { //glöm inte ändra!!
			method: 'POST',
      headers: {Authorization: `Bearer ${token}`},
      body: formData,
    });
		const tasks = await taskCreatedResponse.json();
			dispatch(setTasks({tasks}));
			setTask('');



			if (taskCreatedResponse.ok) {
				navigate(`/projects/${projectId}`);
			}
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

						<TextField
							label="Detaljer"
							onBlur={handleBlur}
							onChange={handleChange}
							value={values.description}
							name="description"
							error={Boolean(touched.description) && Boolean(errors.description)} //Om fältet är tome efter blivit rört eller där kommer error. 
							helperText={touched.description && errors.description}
							sx={{ gridColumn: "span 2"}}/>

					</>
				</Box>
				{/*Knappar}
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

				</Box>
			</form>
		)}

	</Formik>
	)
};


export default Form;

*/