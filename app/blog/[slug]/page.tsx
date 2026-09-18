import { BlogPosts } from "@/data/blog";

interface Params {
    slug: string;
}
const Blog_Posts = async ({params}: {params: Promise<Params>}) => {
    const { slug } = await params;
    const post = BlogPosts.find((post) => post.slug === slug);
    if (!post) {
        return <div className="text-white text-center"> Blog Post not found</div>;
    }
    return (
        <div className="text-white text-center">
            <h1 className="text 3xl font-bold mb-4">Blog Posts</h1>
            <p>This is the content for the blog posts page.</p>
         <div className="mt-4 border-2 border-white p-10 rounded-3xl mx-10 bg-amber-500">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-white-400 mb-4">{post.date}</p>
                <p>{post.content}</p>
                </div>
        </div>
    );
}
export default Blog_Posts;