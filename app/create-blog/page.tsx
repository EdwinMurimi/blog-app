"use client";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useState } from "react";
import { BlogPost } from "../_components/blog-item";
import Head from 'next/head';

export default function Page() {

    const [formData, setFormData] = useState<any>({
        title: '',
        date: '',
        slug: '',
        content: '',
        imageUrl: {
            name: '',
            size: ''
        }
    });

    // Handle text input changes
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle file input change
    const handleFileChange = (e: any) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        const allowedImageTypes = ["image/jpeg", "image/png"];

        console.log(file);

        if (file && allowedImageTypes.includes(file.type)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData: any) => ({
                    ...prevData,
                    imageUrl: e.target.files[0],
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Perform any necessary actions with formData, like submitting to a server
        console.log('Form Data:', formData);
    };
    return (
        <main className="max-w-screen-md flex min-h-screen flex-col items-center justify-between p-10 mx-auto">
            <Head>
                <title>Accessibility blog | create blog page</title>
            </Head>
            <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <h1 className="text-sm font-semibold">Create Blog Post</h1>
                        <a href="/" aria-label="go to home page"><LiaTimesSolid className="cursor-pointer" /></a>
                    </div>
                    <h2>Enter your blog details here. Click save when you&apos;re done.</h2>

                    <div className="mt-5 mb-5">
                        <label htmlFor="blogtitle" className="block text-xs font-medium text-gray-900">Blog Title</label>
                        <input type="text" autoComplete="off" id="blogtitle" className="border border-gray-200 text-gray-900 text-sm rounded-md block w-full p-1.5"
                            value={formData.title}
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Harry Potter"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="blogdate" className="block text-xs font-medium text-gray-900">Blog Date</label>
                        <input type="date" autoComplete="off" id="blogdate" className="border border-gray-200 text-gray-900 text-sm rounded-md block w-full p-1.5"
                            value={formData.date}
                            onChange={handleInputChange}
                            name="date"
                            placeholder="harrypotter"
                            required 
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="blogslug" className="block text-xs font-medium text-gray-900">Slug</label>
                        <input type="text" autoComplete="off" id="blogslug" className="border border-gray-200 text-gray-900 text-sm rounded-md block w-full p-1.5"
                            value={formData.slug} 
                            onChange={handleInputChange} 
                            name="slug"
                            placeholder="harrypotter" 
                            required 
                        />
                    </div>

                    <label htmlFor="message" className="block text-xs font-medium text-gray-900">Image</label>
                    {formData.imageUrl ? (
                        <>
                        <div className="flex flex-col items-center justify-center h-full w-full gap-[10px]">
                            <p className="text-center text-[16px] w-[60%] font-medium text-gray-600">
                            {formData.imageUrl.name} - { formData.imageUrl.size }
                            </p>
                            <button
                                className="text-xs font-bold text-black bg-green-100 rounded-full px-[20px] py-[5px] w-fit h-fit"
                                onClick={handleFileChange}
                                type="button"
                                >
                                Upload again
                            </button>
                        </div>
                        </>
                    ) : (
                        <>
                            <div 
                                tabIndex={0} 
                                className="mb-5 w-full text-center border-[3px] border-dotted rounded-md"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        document.getElementById('imageInput')?.click();
                                    }
                                }}    
                            >
                                <label htmlFor="imageInput" className="inline-block p-10 border-gray-900 cursor-pointer">
                                    <AiOutlineCloudUpload size={20} className="text-[#012B55] mx-auto" />
                                    <span className="block mt-1 mb-3 text-xs">Please upload images in 100x100 pixels size, in either PNG or JPEG format.</span>
                                    <span className="bg-[#012B55] px-4 pt-1 pb-2 text-white rounded-md text-center">Browse Files</span>
                                    <input tabIndex={-1} id="imageInput" type="file" name="imageUrl" className="hidden" accept="image/*" value={formData.imageUrl} onChange={handleFileChange}/>
                                </label>
                            </div>
                        </>
                    )}

                    <div className="mb-3">
                        <label htmlFor="content" className="block text-xs font-medium text-gray-900">Content</label>
                        <textarea id="content" rows={4} className="block p-1.5 w-full text-xs text-gray-900 rounded-md border border-gray-300" 
                            placeholder="Content here..."
                            value={formData.content} 
                            name="content"
                            onChange={handleInputChange} 
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 mb-2 ml-auto">Save Changes</button>
                    </div>
                </form>
            </div>
        </main>
    )
}