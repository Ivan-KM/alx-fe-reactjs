    import { useParams } from "react-router-dom";

    export default function BlogPost() {
    const { postId } = useParams();
    return (
        <div>
        <h2>Blog Post #{postId}</h2>
        <p>This content is dynamically loaded based on the URL parameter.</p>
        </div>
    );
    }
