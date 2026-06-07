import React from 'react';

export const BlogCard = ({ blog }) => {
    const plainText = blog.html?.replace(/<[^>]+>/g, '') || '';
    const shortDescription = plainText.split(' ').slice(0, 15).join(' ');

    const publishDate = new Date(blog.published_at).toLocaleDateString(
        'en-IN',
        {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        }
    );

    return (
        <div className="bg-white rounded-xl border border-gray-300 p-4 shadow-xl/30
        transition duration-300 hover:scale-105">
            <img
                src={blog.feature_image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg"
            />

            <p className="text-xs text-gray-500 mt-3">
                {publishDate}
            </p>

            <h3 className="text-lg font-semibold mt-1">
                {blog.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {shortDescription}
                {plainText.split(' ').length > 15 && '...'}
            </p>
        </div>
    );
};