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
import * as yup from 'yup';
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
    picture: yup.string(),
  });