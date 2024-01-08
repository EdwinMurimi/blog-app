import Image from 'next/image'
import BlogItem, { BlogPost } from './_components/blog-item'
import blogData from '@/data/blogData'

const blogs: BlogPost[] = blogData;

const HomePage: React.FC = () => {
  return (
    <main className="max-w-screen-xl flex min-h-screen flex-col items-center justify-between p-10 mx-auto">
      <div className="container mx-auto mt-4">
      <h1 className="text-3xl font-semibold">The Accessibility Blog</h1>
      <p className="mb-6 text-gray-500">The voice of the excluded</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {blogs.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
    </main>
  )
}

export default HomePage;
