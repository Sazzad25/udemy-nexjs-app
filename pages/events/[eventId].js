import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

const EventDetailPage = () => {

    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No event found!</p>
    }
    // console.log(router.query);
    return (
        <div>
            <Fragment />
            <EventSummary title={event.title} />
            <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
             />
            <EventContent />
            <p>{event.description}</p>
        </div>
    );
};

export default EventDetailPage;