import { useState } from 'react';
import { addSubTaskListPane, addSubTaskListItem, subTaskBody } from '../Styles';
import formInput from '../form/input/formInput'; //fixa fil
import WidgetWrapper from 'components/WidgetWrapper';
import Button from '../scenes/widgets'; 

export default function SubTaskList({ subTaskList, setSubTaskList }) {
    const addSubTaskClickHandler = () => {
        setSubTaskList((prev) => {
            const newState = [...prev, ""];
            return newState;
        });
    };

    const removeClickHandler = (index) => {
        if (subTaskList.length === 0) return;
        setSubTaskList((prev) => {
            const newState = prev.filter((item, idx) => index !== idx);
            return newState;
        });
    };
    const inputChangeHandler = (index, event) => {
        setSubTaskList((prev) => {
            const newState = [...prev];
            newState[index] = event.target.value;
            return newState;
        });
    };

    const subTaskInputItems = subTaskList.map((item, index) => {
        return (
            <AddSubTaskListItem key={index}>
                <formInput
                    width="100%"
                    placeholder="Detta är en subtask."
                    value={item}
                    onChange={inputChangeHandler.bind(null, index)}
                />
                <closeIconLight onClick={removeClickHandler.bind(null, index)} />
            </AddSubTaskListItem>
        );
    });

    return (
        <WidgetWrapper direction="column" width="100%">
            <AddSubTaskListPane>{subTaskInputItems}</AddSubTaskListPane>
            <Button title="Lägg till ny subtask" onClick={addSubTaskClickHandler} />
        </WidgetWrapper>
    );
}