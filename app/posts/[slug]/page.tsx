import blogData from '@/data/blogData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { FaArrowLeftLong } from "react-icons/fa6";

export const metadata: Metadata = {
    title: 'Accessibility blog | Details page',
    description: 'This is an accessibility blog details page',
}

export default function Page(props: { params: { slug: string } }) {

    const { params: { slug } } = props;

    const blog = blogData.find(blog => blog.slug === slug);

    if(!blog) return notFound();

    return (
        <main className="max-w-screen-xl min-h-screen p-10 mx-auto">
            <a href="/" className="flex items-center text-start text-base mb-10"><FaArrowLeftLong className="mr-2" /> Back to blog posts</a>
            <h1 className="text-[32px] leading-10 text-center font-bold">{blog.title}</h1>
            <p className="text-base font-bold text-center mt-4">{blog.date}</p>
            <img className="h-[366px] w-full rounded-md object-cover mt-5" src={blog.imageUrl} alt={blog.title} />
            <p className="font-normal mt-10 text-base leading-[30px]">{blog.content}</p>
        </main>
    )
}