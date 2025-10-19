import { useParams } from "react-router-dom";

export default function BlogPost() {
    const { id } = useParams(); // matches :id in route
    return (
        <div>
        <h2>Blog Post #{id}</h2>
        <p>This is a dynamically rendered blog post page.</p>
        </div>
    );
    }
