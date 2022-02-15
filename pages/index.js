import { Fragment, useEffect, useState } from "react";
import { FilterSection } from "../components/filter-section/FilterSection";
import MeetupList from "../components/meeetup-list/MeetupList";
import { MEETING_TYPE } from "../util/types";

function HomePage({ ALL, WOMEN, MEN, OPEN, CLOSED, YOUNG }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [meetingType, setMeetingType] = useState(MEETING_TYPE.ALL);

  const typeMap = {
    ALL: {
      meetings: ALL,
    },
    WOMEN: {
      meetings: WOMEN,
    },
    CLOSED: {
      meetings: CLOSED,
    },
    OPEN: {
      meetings: OPEN,
    },
    MEN: {
      meetings: MEN,
    },
    YOUNG: {
      meetings: YOUNG,
    },
  };

  const { meetings } = typeMap[meetingType] ?? typeMap.ALL;

  const filteredMeetings = meetings.filter((meeting) =>
    meeting.title.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <Fragment>
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        meetingType={meetingType}
        setMeetingType={setMeetingType}
      />
      <MeetupList meetings={filteredMeetings} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allMeetings = await fetch("http://138.197.190.232:3003").then(
    (response) => response.json()
  );
  const womenMeetings = await fetch("http://138.197.190.232:3003/women").then(
    (response) => response.json()
  );
  const menMeetings = await fetch("http://138.197.190.232:3003/men").then(
    (response) => response.json()
  );
  const openMeetings = await fetch("http://138.197.190.232:3003/open").then(
    (response) => response.json()
  );
  const closedMeetings = await fetch("http://138.197.190.232:3003/closed").then(
    (response) => response.json()
  );
  const youngMeetings = await fetch("http://138.197.190.232:3003/young").then(
    (response) => response.json()
  );

  return {
    props: {
      ALL: allMeetings,
      WOMEN: womenMeetings,
      MEN: menMeetings,
      OPEN: openMeetings,
      CLOSED: closedMeetings,
      YOUNG: youngMeetings,
    },
    revalidate: 3600,
  };
}

export default HomePage;
