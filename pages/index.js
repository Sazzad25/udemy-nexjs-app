import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";

function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default Home;
