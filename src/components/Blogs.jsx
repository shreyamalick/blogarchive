import React, { useEffect, useState } from 'react'
import { BlogCard } from './BlogCard'

export const Blogs = ({search}) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch("https://demo.ghost.io/ghost/api/content/posts/?key=22444f78447824223cefc48062")
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data.posts);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const filterdBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {filterdBlogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.id}/>
                ))}
            </div>
        </>
    )
}
