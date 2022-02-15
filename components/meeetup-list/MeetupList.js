import MeetupItem from "../meetup-item/MeetupItem";
import { Box } from "@chakra-ui/react";

function MeetupList({ meetings }) {
  return (
    <Box px={2} pt="120px">
      {meetings.map((meeting) => (
        <MeetupItem
          key={meeting.title + meeting.address}
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
