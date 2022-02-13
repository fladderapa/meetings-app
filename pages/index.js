import { Fragment, useEffect, useState } from "react";
import { FilterSection } from "../components/filter-section/FilterSection";
import MeetupList from "../components/meeetup-list/MeetupList";

function HomePage({ allMeetings }) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredMeetings = allMeetings.filter((meeting) =>
    meeting.title.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <Fragment>
      <FilterSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <MeetupList meetings={filteredMeetings} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allMeetings = await fetch("http://138.197.190.232:3003").then(
    (response) => response.json()
  );

  // const womenMeetings = await fetch("http://localhost:3003/women").then(
  //   (response) => response.json()
  // );

  return {
    props: {
      allMeetings: allMeetings,
    },
    revalidate: 3600,
  };
}

export default HomePage;
