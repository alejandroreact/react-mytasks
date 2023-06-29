import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Title } from '@bubbles-ui/components';
import { Button, TextInput, Group, Space, Divider } from '@mantine/core';
import Tasks from './Tasks';

function List(props) {

    const [newTask, setNewTask] = useState({listName:props.list.listName, taskName:'', taskDesc:''});

    function handleChangeNewTaskName(e) {
        setNewTask({...newTask, taskName: e.target.value});
    }
    
    function handleChangeNewTaskDesc(e) {
        setNewTask({...newTask, taskDesc: e.target.value});
     }
    
    function handleAddNewTask() {
        props.onAddNewTask(newTask);
        setNewTask({listName:props.list.listName, taskName:'', taskDesc:''});
    }

    return(
        <Paper bordered shadow="level03" style={{background:'lightyellow', margin:5, padding:10, minWidth:'20%vh'}}>
            <Title order={2} color="primary" >
                {props.list.listName}
            </Title>
            <Title order={3} color="primary" >
                {props.list.listDesc}
            </Title>
            <Divider />
            <Tasks tasks={props.tasks}/>
            <Space h='md' />
            <Group position="left" spacing="xs">
                <TextInput placeholder="Tarea"  value={newTask.taskName} size="sm" radius="md" onChange={handleChangeNewTaskName}/>
                <TextInput placeholder="Descripción" value={newTask.taskDesc} size="sm" radius="md" onChange={handleChangeNewTaskDesc}/>
                <Button color="Blue" size="sm" radius="md" compact onClick={handleAddNewTask}>
                    Añadir Tarea
                </Button>        
            </Group>
        </Paper>
    )
}

List.propTypes = {
    list: PropTypes.object,
    tasks: PropTypes.array,
    onAddNewTask: PropTypes.func
}

export default List;
