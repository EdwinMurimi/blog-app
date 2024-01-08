import React from 'react';

export interface BlogPost {
    title: string;
    date: string;
    slug: string;
    content: string;
    imageUrl: string;
}

interface BlogItemProps {
  blog: BlogPost;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  return (
    <a href={`/posts/${blog.slug}`} className="p-4 rounded-xl border bg-white">
      <img src={blog.imageUrl} alt={blog.title} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
      <p className="text-gray-600">{blog.date}</p>
      <p className="text-gray-800 line-clamp-4">{blog.content}</p>
    </a>
  );
};

export default BlogItem;