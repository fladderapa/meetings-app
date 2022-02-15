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
import { MEETING_TYPE } from "../../util/types";

export const FilterSection = ({
  searchQuery,
  setSearchQuery,
  meetingType,
  setMeetingType,
}) => {
  return (
    <Box boxShadow="2xl" pos="fixed" width="100vw" top={0} p={3} bg="black">
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
      <Flex mt={3} direction="column">
        <Stack direction="row">
          <Badge
            onClick={() => setMeetingType(MEETING_TYPE.OPEN)}
            bg={meetingType === MEETING_TYPE.OPEN ? "green.500" : "none"}
            color={meetingType === MEETING_TYPE.OPEN ? "white" : "green.500"}
            borderRadius="0.125rem"
            borderWidth="1px"
            cursor="pointer"
            borderColor="green.500"
          >
            Öppet möte
          </Badge>
          <Badge
            onClick={() => setMeetingType(MEETING_TYPE.CLOSED)}
            bg={meetingType === MEETING_TYPE.CLOSED ? "red.500" : "none"}
            color={meetingType === MEETING_TYPE.CLOSED ? "white" : "red.500"}
            borderRadius="0.125rem"
            borderWidth="1px"
            cursor="pointer"
            borderColor="red.500"
          >
            Slutet möte
          </Badge>
          <Badge
            onClick={() => setMeetingType(MEETING_TYPE.YOUNG)}
            bg={meetingType === MEETING_TYPE.YOUNG ? "orange.500" : "none"}
            color={meetingType === MEETING_TYPE.YOUNG ? "white" : "orange.500"}
            borderRadius="0.125rem"
            borderWidth="1px"
            cursor="pointer"
            borderColor="orange.500"
          >
            Unga i AA
          </Badge>
        </Stack>
        <Stack mt={2} direction="row">
          <Badge
            onClick={() => setMeetingType(MEETING_TYPE.WOMEN)}
            borderRadius="0.125rem"
            borderWidth="1px"
            borderColor="pink.500"
            color={meetingType === MEETING_TYPE.WOMEN ? "white" : "pink.500"}
            bg={meetingType === MEETING_TYPE.WOMEN ? "pink.500" : "none"}
            cursor="pointer"
          >
            Kvinnomöte
          </Badge>
          <Badge
            bg={meetingType === MEETING_TYPE.MEN ? "blue.500" : "none"}
            onClick={() => setMeetingType(MEETING_TYPE.MEN)}
            color={meetingType === MEETING_TYPE.MEN ? "white" : "blue.500"}
            borderRadius="0.125rem"
            borderWidth="1px"
            cursor="pointer"
            borderColor="blue.500"
          >
            Mansmöte
          </Badge>
          <Badge
            onClick={() => setMeetingType(MEETING_TYPE.ALL)}
            bg={meetingType === MEETING_TYPE.ALL ? "gray.200" : "none"}
            color={meetingType === MEETING_TYPE.ALL ? "black" : "gray.200"}
            borderRadius="0.125rem"
            borderWidth="1px"
            cursor="pointer"
            borderColor="gray.200"
            cursor="pointer"
          >
            Alla
          </Badge>
        </Stack>
      </Flex>
    </Box>
  );
};
