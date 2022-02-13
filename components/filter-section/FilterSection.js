import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import {
  InputGroup,
  Input,
  InputRightElement,
  Badge,
  Stack,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

export const FilterSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <Box boxShadow="2xl" pos="fixed" width="100vw" top={0} p={4} bg="#070D0D">
      <InputGroup>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Sök möte"
          variant="outline"
          color="gray.300"
        />
        <InputRightElement
          children={
            <SmallCloseIcon
              color="gray.500"
              cursor="pointer"
              onClick={() => setSearchQuery("")}
            />
          }
        />
      </InputGroup>
      <Flex mt={4} direction="column">
        <Stack direction="row">
          <Badge bg="green.300">Öppet möte</Badge>
          <Badge bg="red.400">Slutet möte</Badge>
          <Badge bg="orange.300">Unga i AA</Badge>
        </Stack>
        <Stack mt={2} direction="row">
          <Badge bg="pink.300">Kvinnomöte</Badge>
          <Badge bg="blue.300">Mansmöte</Badge>
        </Stack>
      </Flex>
    </Box>
  );
};
