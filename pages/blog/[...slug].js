const { useRouter } = require("next/router")

function BlogPage() {
    const router = useRouter();

    console.log(router.query);
    return (
        <div>
            <h1>This is blog page....</h1>
        </div>
    )
}

export default BlogPage;