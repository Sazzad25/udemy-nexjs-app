import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEventPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year, month){
        const fullPath = `/events/${year}/${month}`;

        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </Fragment>
    )
}

export default AllEventPage;