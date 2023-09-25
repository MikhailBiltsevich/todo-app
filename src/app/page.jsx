"use client";
import {
  Box,
  Button,
  Container,
  Input,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Task from "./components/Task";

export default function Home() {
  const [tasks, setTask] = useState([]);
  const inputRef = useRef(null);

  const addTask = (event) => {
    event.preventDefault();
    const newTask = { content: inputRef.current.value, id: uuid() };
    setTask((value) => [...value, newTask]);
    inputRef.current.value = "";
  };

  const handleDelete = (id) => {
    setTask((value) => value.filter((item) => item.id !== id));
  };

  return (
    <Container maxW="lg">
      <form onSubmit={addTask}>
        <Stack direction="row" padding="5">
          <Input
            isRequired
            variant="filled"
            ref={inputRef}
            placeholder="Enter task"
          />
          <Button colorScheme="gray" type="submit">
            Add
          </Button>
        </Stack>
      </form>
      <Stack padding="5">
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              content={task.content}
              onDelete={() => handleDelete(task.id)}
            />
          ))
        ) : (
          <Box borderRadius={"md"} p={"2.5"} backgroundColor="gray.100">
            <Text>To Do List is empty</Text>
          </Box>
        )}
      </Stack>
    </Container>
  );
}
