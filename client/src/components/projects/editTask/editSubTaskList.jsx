import { useState } from 'react';
import { editSubTaskListPane, editSubTaskListItem } from '../Styles';
import WidgetWrapper from 'components/WidgetWrapper';
import Button from 'scenes/widgets/button';


export default function EditSubTaskList({ subTaskList, setSubTaskList }) {
    const addSubTaskClickHandler = () => {
        setSubTaskList((prev) => {
            const newState = [...prev, ""];
            return newState;
        });
    };

    const removeClickHandler = (index) => {
        if (subTaskList.length === 1) return;
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
            <editSubTaskListItem key={index}>
                <formInput
                    width="100%"
                    placeholder="Detta är en subtask."
                    value={item}
                    onChange={inputChangeHandler.bind(null, index)}
                />
                <closeIconLight onClick={removeClickHandler.bind(null, index)} />
            </editSubTaskListItem>
        );
    });

    return (
        <WidgetWrapper direction="column" width="100%">
            <editSubTaskListPane>{subTaskInputItems}</editSubTaskListPane>
            <Button title="Lägg till ny subtask" onClick={addSubTaskClickHandler} />
        </WidgetWrapper>
    );
}