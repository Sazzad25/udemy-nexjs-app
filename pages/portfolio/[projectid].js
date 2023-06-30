import { useRouter } from "next/router";

const DynamicPage = () => {

    const router = useRouter();

    console.log(router.pathname);
    // console.log(router.query);
    return (
        <div>
            <h1>This is Dynamic page!</h1>
        </div>
    );
};

export default DynamicPage;