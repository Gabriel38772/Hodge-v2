import {Box, Typography, Divider, useTheme} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import WidgetWrapper from 'components/WidgetWrapper';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import {setColumns} from 'state';
import ColumnWidget from './columnWidget.jsx'


const ColumnsWidget = ({projectId, isProject=false}) => {
  const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const columns = useSelector((state) => state.columns);

  const {palette} = useTheme();

  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getColumns = async () => {
    const response = await fetch(`http://localhost:3001/column`, {
      method: 'GET',
      headers: {Authorization: `Bearer ${token}`},
    });
    const data = await response.json();
    dispatch(setColumns({columns: data}));
  };
  
  const getProjectColumns = async () => {
    const response = await fetch(
      `http://localhost:3001/column/${projectId}`,
      {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`},
      });
    const data = await response.json();
    dispatch(setColumns({columns: data}));
  };

  useEffect(() => {
    if (isProject) {
      getProjectColumns();
    } else {
      getColumns();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <> 
   {columns?.map(
        ({
          _id,
			    title,
			    forProject,
			    columnId
         }) => (
          <ColumnWidget
            key={_id}
            forProject={forProject}
            title={title}
            columnId={columnId}
          />
        ),
      )}
    </>  
  );
};

export default ColumnsWidget;


