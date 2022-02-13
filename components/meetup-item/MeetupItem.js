import { useRouter } from "next/router";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import ReactHtmlParser from "react-html-parser";

function MeetupItem({ title, schedule, address, info }) {
  return (
    <Flex direction="column" my={10}>
      <Flex align="center">
        <Image
          src="https://m.media-amazon.com/images/I/51lvl-u49NL._AC_SY355_.jpg"
          alt="Dan Abramov"
          boxSize="50px"
          borderRadius="6px"
          mr={3}
        />
        <Flex height="100%" justify="center" direction="column">
          <Text fontWeight="semibold" fontSize="sm" color="gray.50">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.300">
            {address}
          </Text>
        </Flex>
      </Flex>
      <Text my={3} fontSize="sm" color="gray.400">
        {info}
      </Text>
      <Box mx="-8px">
        <table>{ReactHtmlParser(schedule)}</table>
      </Box>
    </Flex>
  );
}

export default MeetupItem;
