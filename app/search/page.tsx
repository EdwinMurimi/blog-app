"use client";
import BlogItem, { BlogPost } from "../_components/blog-item";
import blogData from "@/data/blogData";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdSearchOff } from "react-icons/md";

const blogs: BlogPost[] = blogData;

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let debounceTimer: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(...args), delay);
  };
};

const SearchPage: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [resultsTitle, setResultsTitle] = useState("Showing all blog posts");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(blogs);

  const handleSearchClick = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleSearchChange = debounce((e) => {
    setSearchTerm(e.target.value);
  }, 500);

  useEffect(() => {
    const results = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchResults.length, searchTerm]);

  return (
    <main className="max-w-screen-xl flex min-h-screen flex-col items-center justify-between p-10 mx-auto">
      <div className="container mx-auto mt-4">
        <a href="/" className="flex gap-[10px] items-center mb-[10px]">
          <FaArrowLeftLong />
          <p className=" text-gray-500">Back to blog posts</p>
        </a>
        <div className="mx-auto flex flex-col gap-[20px] items-center w-full  mb-[20px]">
          <p className="text-[30px] font-bold">Search Blogs</p>
          <div
            className={`relative ${
              isFocused ? "ring-2 ring-blue-500" : ""
            } border rounded-full w-[60%]`}
          >
            <input
              type="text"
              className="pr-10 pl-3 py-2 rounded-full text-sm focus:outline-none w-full"
              placeholder="Search..."
              onBlur={handleBlur}
              onChange={handleSearchChange}
            />
            <button
              onClick={handleSearchClick}
              className="absolute right-0 top-0 mt-2 mr-4"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <p className="text-[15px]">
            {!searchTerm && resultsTitle}
            {searchTerm &&
              searchResults.length !== 0 &&
              `Showing ${searchResults.length} results for "${searchTerm}"`}
          </p>
        </div>
        {searchResults.length !== 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {searchResults.map((blog) => (
              <BlogItem key={blog.slug} blog={blog} />
            ))}
          </div>
        )}
        {searchResults.length === 0 && (
          <div className="flex items-center flex-col gap-[5px] text-[30px] justify-center">
            <MdSearchOff />
            <p className="text-[10px] font-bold">No results</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchPage;
