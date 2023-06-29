import React from 'react';
import { useState, useEffect} from 'react';
import { PageContainer, Stack, Title } from '@bubbles-ui/components';
import { Button, TextInput, Group, Space } from '@mantine/core';
import List from './components/List';
import {URL_SERVER} from './components/constants';

import './App.css';


function App() {
  const [serverError, setServerError] = useState(false);
  const [lists, setLists] = useState ([]);
  const [tasks, setTasks] = useState ([]);
  const [newList, setNewList] = useState ({listName:'',listDesc:''});
  

  async function loadDataLists (controller) {
    //GET request to server
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'},
        signal: controller.signal
    }
    try {
        const response = await fetch(URL_SERVER + '/api/lists', requestOptions)
        const data = await response.json()
        setLists(data.lists);
        return data;
    }
    catch (error) {
        console.error ('Load Lists - ERROR: ', error)
        if (error.name !== "AbortError") {
          setServerError(true)
        }
        return //exits the function
      }
  }

  async function loadDataTasks (controller) {
    //GET request to server
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'},
        signal: controller.signal
    }
    try {
        const response = await fetch(URL_SERVER + '/api/tasks', requestOptions)
        const data = await response.json()
        setTasks(data.tasks);
        return data;
    }
    catch (error) {
        console.error ('Load Tasks - ERROR: ', error)
        if (error.name !== "AbortError") {
          setServerError(true)
        }
        return //exits the function
      }
  }

  function loadData(controller) {
    loadDataLists(controller);
    loadDataTasks(controller);
    return 
  };

  async function addLists () {
    //GET request to server
    const JSONList = newList
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(JSONList)
    }
    try {
        const response = await fetch(URL_SERVER + '/api/lists', requestOptions)
        const data = await response.json()
        setLists(data.lists);
        return data;
    }
    catch (error) {
        console.error ('Add Lists - ERROR: ', error)
        if (error.name !== "AbortError") {
          setServerError(true)
        }
        return //exits the function
      }
  }

  async function addTasks (newTask) {
    //GET request to server
    const JSONTask = newTask
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(JSONTask)
    }
    try {
        const response = await fetch(URL_SERVER + '/api/tasks', requestOptions)
        const data = await response.json()
        setTasks(data.tasks);
        return data;
    }
    catch (error) {
        console.error ('Add Tasks - ERROR: ', error)
        if (error.name !== "AbortError") {
          setServerError(true)
        }
        return //exits the function
      }
  }

  function handleAddNewList() {
    if (newList.listName === '') {
      //TODO: add warning   
    } else {
      addLists();
      setNewList({listName:'',listDesc:''});
    }
  }

  function handleChangeNewListName(e) {
    setNewList({...newList, listName: e.target.value});
  }

  function handleChangeNewListDesc(e) {
    setNewList({...newList, listDesc: e.target.value});
  }

  function handleAddNewTask(newTask) {
    if (newTask.taskName === '') {
      //TODO: add warning  
    } else {
      addTasks(newTask);
    }
  }

  useEffect(() => { 
    const controller = new AbortController()
    loadData(controller);
    return () => {controller.abort()}
    // eslint-disable-next-line
  },[]);


  return (
    <div className="App">
      {serverError===true ? (<Title>¡Error del servidor!</Title>) : (
        <>
          <PageContainer fullWidth={true} style={{background:'#282c34', padding:25}}>
            <Title color="primary" highlighted>
              Cosas por hacer:
            </Title>
            <Space h='xl' />
            <Stack align="center" fullWidth spacing={10}>
              {Array.isArray(lists) && lists.map((listValue,index) => {
                return (
                  <List key={listValue.listName} list={listValue} tasks={tasks.filter((taskValue) => (taskValue.listName === listValue.listName))} onAddNewTask={handleAddNewTask} />
                )
              })}
            </Stack>
            <Space h='xl' />
            <Group position="center" spacing="xs">
              <TextInput placeholder="Lista" value={newList.listName} size="sm" radius="md" onChange={handleChangeNewListName}/>
              <TextInput placeholder="Descripción" value={newList.listDesc} size="sm" radius="md" onChange={handleChangeNewListDesc} />
              <Button color="blue" radius="lg" size="sm" onClick={handleAddNewList} >
                Añadir Lista
              </Button>        
            </Group>
          </PageContainer>
        </>
      )}
    </div>
  );
}

export default App;
