import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Task({ content, onDelete }) {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => setIsDone((value) => !value);

  return (
    <Box
      _hover={{ backgroundColor: "gray.200" }}
      transition="all  0.5s"
      onClick={handleClick}
      display="flex"
      justifyContent="space-between"
      borderRadius={"md"}
      p={"2.5"}
      backgroundColor="gray.100"
    >
      <Text textDecoration={isDone && "line-through"}>{content}</Text>
      <Button variant="ghost" size="xs" colorScheme="red" onClick={onDelete}>
        Delete
      </Button>
    </Box>
  );
}
