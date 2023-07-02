import { useRouter } from "next/router";

const EventDetailPage = () => {

    const router = useRouter();

    console.log(router.pathname);
    // console.log(router.query);
    return (
        <div>
            <h1>This is Event Detail page!</h1>
        </div>
    );
};

export default EventDetailPage;