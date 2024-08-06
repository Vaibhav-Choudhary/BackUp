import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card"; // Assuming Card is a component you want to render for each post
import BlogDetails from "./BlogDetails";

function Blogs() {
    // Consume context
    const { posts, loading } = useContext(AppContext);

    return (
        <div className="w-11/12 max-w-[670px] py-8 flex h-screen justify-center items-center flex-col gap-y-7 mt-[64px] mb-[64px]">
            {
                loading ? (
                    <Spinner />
                ) : (
                    posts.length === 0 ? (
                        <div >No Posts Found</div>
                    ) : (
                        posts.map(post => (
                            <BlogDetails key={post.id} post={post} />
                        ))
                    )
                )
            }
        </div>
    );
}

export default Blogs;
