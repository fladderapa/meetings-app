import MeetupItem from "../meetup-item/MeetupItem";
import { Box } from "@chakra-ui/react";

function MeetupList({ meetings }) {
  return (
    <Box px={4} pt="120px">
      {meetings.map((meeting) => (
        <MeetupItem
          title={meeting.title}
          address={meeting.address}
          info={meeting.info}
          schedule={meeting.schedule}
        />
      ))}
    </Box>
  );
}

export default MeetupList;
