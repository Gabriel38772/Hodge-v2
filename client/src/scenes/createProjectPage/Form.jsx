import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme } from '@mui/material';
import { EditOutlined } from '@mui/icons-material';
import { Formik } from 'formik';
import * as yup from 'yup'; //Form validation
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state';
import Dropzone from 'react-dropzone'; //Låter användare "drop" en fil för att kunna ladda upp den på sidan
import FlexBetween from '../../components/FlexBetween';

const projectSchema = yup.object().shape({
    userId: yup.string().required('required'),
    title: yup.string().required('required'),
    info: yup.string(),
    category: yup.string().required('required'),
    picture: yup.string()
  });

const initialValuesCreateProject = {
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

    const handleFormSubmit = async(values, onSubmitProps) => {};

    return(
        <Formik onSubmit={handleFormSubmit}>
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
                    <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0,1fr))"
                        {/* Om det inte är mobile ska den vara 
                        undefined. Om det är mobile sätts span till 4. */}
                        sx={{"&>div": {gridColumn: isNonMobile ? undefined : "span 4"}, }}> 
                        

                    </Box>

                </form>
            )}

        </Formik>
    )
};


export default Form;